
# authGuard

An npm library for authentication guard validation via a remote config URL.

## Getting Started

1. Clone or download this repository.
2. Run `npm install` to install dependencies (none required).
3. Use the `authGuard` function in your code.

## Usage

```js
const { authGuard } = require("authGuard");

(async () => {
	const configUrl = "https://your-config-url.com";
	const licenseId = "YOUR-LICENSE-ID";
	const features = "frontend";
		const isValid = await authGuard(configUrl, licenseId, features);
	console.log("Service validated:", isValid);
})();
```

## API

### authGuard(configUrl, licenseId, features)

- `configUrl` (string): The URL to validate the license against.
- `licenseId` (string): The license ID to send in the request header.
- `features` (string): The features string to send in the request header.
- Returns: `Promise<boolean>` - Resolves to true if service is validated, false otherwise.
