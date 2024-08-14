# Helios Demo

A Quick guide on how to set up and run the demo. Here is a [recorded demo](https://drive.google.com/file/d/1Ujg-20OZRZvGs51ra_wfsB229ILy1vD0/view?usp=sharing)

## Prerequisites

Before you start, ensure you have the following tools installed on your system:

- wasm-pack
- npm
- [http-server](https://www.npmjs.com/package/http-server) or any other web server

## Running the Project

To get the project up and running, follow these steps:

1. **Build the Rust Code**

   ```shell
   wasm-pack build --target web
   ```

2. **Build the TypeScript Code**

   First, install the project dependencies:

   ```shell
   npm install
   ```

   Then, build the project:

   ```shell
   npm run build
   ```

3. **Run the Server**

   Finally, serve the project using `http-server`:

   ```shell
   http-server
   ```

Visit `http://localhost:8080` in your web browser to view the project.

## Notes

- A valid checkpoint: [`0x790691a9a26193aaba34d0ee468876823e16234348b760aaa5a2c2ee89f751e0`](https://beaconcha.in/slot/9697184)
- Check the console for any errors.
- To avoid CORS issues, either:
  - Use a proxy server to fetch the data. You can use "https://corsproxy.io/?". Just prefix the URLs in [`app.js`](app.js) with the proxy URL.
  - Run your own proxy server.
  - Use a browser extension to disable CORS.
  - Run the browser with CORS disabled. For example, to run Chrome with CORS disabled on OSX, use the following command:

```shell
  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args     --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

- If the requests time out, try chaning the proxy URL. If it still times out without any errors, odds are the API is down.
