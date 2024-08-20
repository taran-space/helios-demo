# Helios Demo

A Quick guide on how to set up and run the demo.

## Building the WebAssembly part

1. Install Rust and `wasm-pack`.
2. Make sure that you use `1.82.0-nightly` version of Rust compiler.
3. Generate the WebAssembly library using `wasm-pack build --target web`.

## Running the Project

To get the project up and running, follow these steps:

1. Provide `target/wasm32-unknown-unknown/release/helios_ts.wasm`
2. Install dependencies using `npm install`
3. Build the project using `npm run build`
4. Finally, serve the project using `http-server`

Go to `http://localhost:8080` in your web browser to view the project.

## Syncing the client
For this you need to select a block for bootstrapping the light client:
1. Open https://beaconcha.in/
2. Open any **_finalized epoch not older than 2 weeks_**, e.g. https://beaconcha.in/epoch/305454
3. Find the very first slot (the earliest), e.g. in the epoch 305454: https://beaconcha.in/slot/9774528
4. Copy hash in the `block root` field: `0x4fb3cdfabdfe3df74c3de6157dfe816bef1130044f5982bf54f2e3a04f698e2f`
5. Paste into the UI.

## About CORS
To avoid CORS issues, either:
- In production, you should run your own proxy server.
- For development purposes, you can:
  - Use a browser extension to disable CORS.
  - Run the browser with CORS disabled using Terminal.
  - Use a public proxy server like "https://corsproxy.io/?". Prefix the URLs in [`app.js`](app.js) with the proxy URL.
