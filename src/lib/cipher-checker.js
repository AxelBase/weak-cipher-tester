import {
    matchWeakCipher,
    loadWeakCipherDB,
    parseCipherAttributes,
    evaluateCompliance,
    evaluateScore,
    classifyCipher
} from "./utils.js";

let abortController = null;

export async function analyzeCipherList(cipherList, timeoutMs = 5000) {
    abortController = new AbortController();

    return new Promise(async (resolve, reject) => {
        const timer = setTimeout(() => {
            abortController.abort();
            reject("Analysis timeout. Cipher may be malformed.");
        }, timeoutMs);

        try {
            const weakList = await loadWeakCipherDB();
            const results = [];

            for (const c of cipherList) {
                if (abortController.signal.aborted) break;

                try {
                    console.log("[checker] analyzing:", c);

                    const weak = matchWeakCipher(c, weakList);

                    const attr = parseCipherAttributes(c);
                    const compliance = evaluateCompliance(attr, !!weak);
                    const scored = evaluateScore(attr, !!weak);
                    const classification = classifyCipher(attr, !!weak);

                    results.push({
                        cipher: c,
                        attributes: attr,
                        weak,
                        compliance,
                        score: scored.score,
                        grade: scored.grade,
                        classification
                    });
                } catch (inner) {
                    console.error("Cipher analysis failed:", c, inner);
                }
            }

            clearTimeout(timer);
            resolve(results);

        } catch (err) {
            console.error("Analysis fatal error:", err);
            clearTimeout(timer);
            reject(err);
        }
    });
}

export function cancelAnalysis() {
    if (abortController) abortController.abort();
}
