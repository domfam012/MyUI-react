/*
 * enter your production environment
 * ..
 */

const option = {
  assetPrefix: {
    dev: "http://localhost:3000",
    prod: "http://127.0.0.1"
  },
  ip: {
    dev: "localhost",
    prod: "127.0.0.1"
  },
  port: {
    dev: 3000,
    prod: 80
  },
};

module.exports = {
  option
};
