const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(withSass());

module.exports = {
    images: {
        devicesSizes: [285, 325, 450, 600, 768, 1024, 1500]
    }
}