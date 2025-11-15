import { base } from "$app/paths";

/* ============================================
   SAFE LOGGER
============================================ */
function log(...args) {
    console.log("[utils]", ...args);
}

/* ============================================
   LOAD WEAK CIPHER DB
============================================ */
export async function loadWeakCipherDB() {
    try {
        const res = await fetch(`${base}/weak-ciphers.json`);
        const data = await res.json();
        log("Loaded weak cipher DB:", data);
        return data.weak_ciphers || [];
    } catch (err) {
        console.error("Weak DB load error:", err);
        return [];
    }
}

/* ============================================
   NORMALIZE
============================================ */
export function normalizeCipherName(name) {
    if (!name) return "";
    return name.trim().toUpperCase();
}

/* ============================================
   STRICT WEAK CIPHER MATCHER
============================================ */
export function matchWeakCipher(cipherName, weakList) {
    try {
        const n = normalizeCipherName(cipherName);
        const tokens = n.split(/[^A-Z0-9]+/).filter(Boolean);

        for (const w of weakList) {
            const wn = String(w.name || "").toUpperCase().trim();

            if (!wn) continue;

            // Exact match
            if (tokens.includes(wn)) return w;

            // Targeted insecurity markers
            if (["RC4", "3DES", "DES", "MD5"].includes(wn) && n.includes(wn))
                return w;

            // EXPORT
            if (wn.includes("EXPORT") && n.includes("EXPORT"))
                return w;

            // SSL
            if (wn === "SSL3" && n.includes("SSL3")) return w;
            if (wn === "SSL2" && n.includes("SSL2")) return w;
        }

        return undefined;

    } catch (err) {
        console.error("WeakCipher matching error:", err);
        return undefined;
    }
}

/* ============================================
   ATTRIBUTE PARSER (HARDENED)
============================================ */
export function parseCipherAttributes(cipher) {
    try {
        const c = normalizeCipherName(cipher);

        const get = (v) => v || "UNKNOWN";

        /* -------- KEY EXCHANGE -------- */
        const kx =
            c.includes("ECDHE") ? "ECDHE" :
            c.includes("ECDH")  ? "ECDH" :
            c.includes("DHE")   ? "DHE" :
            c.includes("DH")    ? "DH" :
            c.includes("RSA")   ? "RSA" :
            c.includes("PSK")   ? "PSK" :
            "UNKNOWN";

        /* -------- AUTH -------- */
        const au =
            c.includes("ECDSA") ? "ECDSA" :
            c.includes("RSA")   ? "RSA" :
            c.includes("DSS")   ? "DSS" :
            c.includes("DSA")   ? "DSA" :
            "UNKNOWN";

        /* -------- ENCRYPTION -------- */
        const enc =
            c.includes("AES_256_GCM") ? "AES-256-GCM" :
            c.includes("AES_128_GCM") ? "AES-128-GCM" :
            c.includes("CHACHA20")    ? "CHACHA20-POLY1305" :
            c.includes("AES_256_CCM") ? "AES-256-CCM" :
            c.includes("AES_128_CCM") ? "AES-128-CCM" :
            c.includes("AES_256_CBC") ? "AES-256-CBC" :
            c.includes("AES_128_CBC") ? "AES-128-CBC" :
            (c.includes("3DES") || c.includes("DES-EDE3")) ? "3DES" :
            (c.includes("DES")) ? "DES" :
            (c.includes("RC4")) ? "RC4" :
            "UNKNOWN";

        /* -------- MAC -------- */
        const mac =
            (enc.includes("GCM") || enc.includes("CCM") || enc === "CHACHA20-POLY1305")
                ? "AEAD"
                : c.includes("_SHA256") ? "SHA256"
                : c.includes("_SHA384") ? "SHA384"
                : c.includes("_SHA")    ? "SHA1"
                : c.includes("MD5")     ? "MD5"
                : "UNKNOWN";

        /* -------- MODE -------- */
        const mode =
            enc.includes("GCM") ? "GCM" :
            enc.includes("CCM") ? "CCM" :
            enc.includes("CBC") ? "CBC" :
            enc.includes("POLY1305") ? "POLY1305" :
            "UNKNOWN";

        /* -------- KEYSIZE -------- */
        let keySize = 0;
        if (enc.includes("256")) keySize = 256;
        else if (enc.includes("128")) keySize = 128;
        else if (enc === "3DES") keySize = 112;
        else if (enc === "DES") keySize = 56;
        else if (enc === "RC4") keySize = 128;  // FIXED

        /* -------- TLS VERSION -------- */
        let tlsVersion =
            (c.startsWith("TLS_AES_") || c.startsWith("TLS_CHACHA20")) ? "TLS1.3" :
            c.includes("TLS1.3") ? "TLS1.3" :
            c.includes("TLS1.2") ? "TLS1.2" :
            c.includes("TLS1.1") ? "TLS1.1" :
            c.includes("TLS1.0") ? "TLS1.0" :
            c.includes("SSL3")   ? "SSL3" :
            c.includes("SSL2")   ? "SSL2" :
            (c.startsWith("TLS_") ? "TLS1.2" : "UNKNOWN");

        const attr = {
            kx: get(kx),
            au: get(au),
            enc: get(enc),
            mac: get(mac),
            mode: get(mode),
            keySize,
            tlsVersion: get(tlsVersion)
        };

        log("Parsed attributes:", cipher, attr);
        return attr;

    } catch (err) {
        console.error("parseCipherAttributes failed:", err);
        return {
            kx: "UNKNOWN",
            au: "UNKNOWN",
            enc: "UNKNOWN",
            mac: "UNKNOWN",
            mode: "UNKNOWN",
            keySize: 0,
            tlsVersion: "UNKNOWN"
        };
    }
}

/* ============================================
   COMPLIANCE
============================================ */
export function evaluateCompliance(attr, isWeak) {
    try {
        return {
            pci:
                isWeak ||
                ["TLS1.0", "TLS1.1", "SSL3", "SSL2"].includes(attr.tlsVersion) ||
                attr.enc === "RC4" ||
                attr.enc === "3DES" ||
                attr.enc === "DES" ||
                attr.mac === "MD5"
                    ? "NON-COMPLIANT"
                    : "COMPLIANT",

            fips:
                isWeak ||
                !["AES-256-GCM", "AES-128-GCM", "AES-256-CCM", "AES-128-CCM", "CHACHA20-POLY1305"]
                    .includes(attr.enc)
                    ? "NON-COMPLIANT"
                    : "COMPLIANT"
        };
    } catch (err) {
        console.error("Compliance evaluation error:", err);
        return { pci: "NON-COMPLIANT", fips: "NON-COMPLIANT" };
    }
}

/* ============================================
   SCORE
============================================ */
export function evaluateScore(attr, isWeak) {
    try {
        let score = 100;

        if (isWeak) score -= 70;
        if (attr.kx === "RSA") score -= 20;
        if (attr.kx === "DH") score -= 25;
        if (attr.mac === "SHA1") score -= 15;
        if (attr.mac === "MD5") score -= 40;
        if (attr.mode === "CBC") score -= 20;

        if (["SSL2", "SSL3"].includes(attr.tlsVersion)) score = 0;
        if (["TLS1.0", "TLS1.1"].includes(attr.tlsVersion)) score -= 40;

        if (attr.keySize === 56 || attr.keySize === 112) score -= 40;

        score = Math.max(0, Math.min(100, score));

        const grade =
            score >= 95 ? "A+" :
            score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" :
            score >= 40 ? "E" : "F";

        return { score, grade };

    } catch (err) {
        console.error("evaluateScore crash:", err);
        return { score: 0, grade: "F" };
    }
}

/* ============================================
   CLASSIFICATION
============================================ */
export function classifyCipher(attr, isWeak) {
    try {
        if (isWeak) return "WEAK";

        if (attr.mode === "GCM" || attr.mode === "CCM" || attr.enc === "CHACHA20-POLY1305")
            return "MODERN";

        if (attr.mac === "SHA256" || attr.mac === "SHA384")
            return "STRONG";

        return "MEDIUM";

    } catch (err) {
        console.error("classifyCipher crash:", err);
        return "WEAK";
    }
}
