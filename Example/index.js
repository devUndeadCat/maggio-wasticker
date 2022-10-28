import {
  makeSticker,
  setExif
} from "../index.js"

async function teste({path, savePath, author, packname}){
  try {
    
    await makeSticker(path, savePath)
    await setExif(savePath, author, packname)
    console.log("sucess make sticker")
    
  } catch(err) {
    console.log(err)
  }
}

teste({
  path: "./universe.png",
  savePath: "./sticker.webp",
  author: "hello",
  packname: "world"
})