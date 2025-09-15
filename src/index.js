// Original license validation logic

// License service validation logic extracted from NextAuth
async function authGuard(configUrl, licenseKey, features = "frontend") {
    if (!configUrl || !licenseKey) {
        throw new Error("Missing configUrl or licenseKey");
    }
    const response = await fetch(configUrl, {
        method: "GET",
        headers: {
            "x-licenseid": licenseKey,
            "x-features": features,
        },
        cache: "no-store",
    });
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        return response.ok && data?.message === "OK";
    } else {
        const textData = await response.text();
        return response.ok && (textData === "OK" || textData.includes('"message":"OK"'));
    }
}

module.exports = { authGuard };