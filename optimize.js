const imagemin = require("imagemin-overwrite");
const imageminMozjpeg = require("imagemin-mozjpeg");

(async () => {
  const files = await imagemin(["_site/**/*.jpg"], {
    plugins: [imageminMozjpeg({ quality: 75 })]
  });
  console.log(files);
})();
