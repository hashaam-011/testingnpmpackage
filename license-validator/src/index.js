/**
 * Validates a license by calling a remote config URL.
 * @param {string} configUrl - The URL to validate the license against.
 * @param {string} licenseId - The license ID to send in the request header.
 * @param {string} features - The features string to send in the request header.
 * @returns {Promise<boolean>} - Resolves to true if service is validated, false otherwise.
 */
async function authGuard(configUrl, licenseId, features) {
	try {
		const response = await fetch(configUrl, {
			method: "GET",
			headers: {
				"x-licenseid": licenseId,
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
	} catch (err) {
		return false;
	}
}

module.exports = {
	authGuard,
};
