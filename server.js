const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = false;
const dir = "./";

const app = next({ dev, dir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`TrueTechFinder running on port ${port}`);
  });
});
