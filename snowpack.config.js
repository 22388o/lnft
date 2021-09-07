// Consult https://www.snowpack.dev to learn about these options

module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: [
    ["@snowpack/plugin-dotenv"],
    [
      "@snowpack/plugin-svelte",
      {
        compilerOptions: {
          hydratable: true,
        },
      },
    ],
  ],
  proxy: {
    "/api": {
      target: "http://localhost:8091",
      on: {
        proxyReq: (p, req, res) => {
          p.path = req.url.replace("/api", "");
        },
      },
    },
  },
  mount: {
    "src/components": "/_components",
    "src/lib": "/_app/lib",
    "src/icons": "/_app/icons",
    "src/queries": "/_app/queries",
    "src/styleguide": "/_app/styleguide",
  },
  alias: {
    $styleguide: "./src/styleguide",
    $components: "./src/components",
    $lib: "./src/lib",
    $icons: "./src/icons",
    $queries: "./src/queries",
    $comp: "./src/components/index.js",
    "readable-stream": "stream",
  },
  installOptions: {
    externalPackage: [],
    polyfillNode: true,
  },
};
