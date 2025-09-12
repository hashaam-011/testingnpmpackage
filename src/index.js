// Original license validation logic
function authGuard(licenseKey) {
    // Example validation logic
    if (!licenseKey || typeof licenseKey !== 'string') {
        throw new Error('Invalid license key');
    }
    // Simulate license check
    if (licenseKey.startsWith('VALID-')) {
        return true;
    }
    return false;
}

module.exports = { authGuard };