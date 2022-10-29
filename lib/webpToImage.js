import webpInfo from "animated-webp-info";
import ffmpeg from "fluent-ffmpeg";

export function webpToImage(path, savePath) {
  return new Promise((resolve, reject)=> {
    try {
      if (!savePath) savePath = "./converted-webp.png";

      webpInfo(path, (err, result) => {
        if (err) reject(err)
        let isAnimated = result.webp?.featuresPresent.includes("animation") ? true: false;
        if (isAnimated) reject(new Error("animated webp are not supported"))

        /***/
        ffmpeg(path)
        .save(savePath)
        .on("end", function(err) {
          if (err) reject(err)
          resolve(true)
        });
        /***/

      });

    } catch(err) {
      reject(err)
    }
  })
}