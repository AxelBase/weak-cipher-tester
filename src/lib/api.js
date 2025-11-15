// Extract ciphers from simple OR structured input
export function extractCiphers(rawText) {
    if (!rawText) return [];

    // Capture full cipher suite names OR structured “Cipher: XYZ”
    const regex =
        /(TLS_[A-Z0-9_]+(?:_[A-Z0-9_]+)*)|Cipher:\s*([A-Za-z0-9_\-]+)|([A-Z0-9\-]+SHA[0-9A-Z]*)/g;

    const matches = [...rawText.matchAll(regex)]
        .map(m => m[1] || m[2] || m[3])
        .filter(Boolean);

    return [...new Set(matches.map(c => c.trim()))];
}
