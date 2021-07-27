import Compressor from "compressorjs";
import { storage } from "./firebase.js";

export const sendImage = (CompressedImg) => {
  return new Promise((resolve, reject) => {
    const uploadTask = storage
      .ref(`images/${CompressedImg.lastModified}_${CompressedImg.name}`)
      .put(CompressedImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("progress:", progress);
      },
      (error) => {
        reject(error);
      },
      () => {
        storage
          .ref("images")
          .child(CompressedImg.lastModified + "_" + CompressedImg.name)
          .getDownloadURL()
          .then((url) => {
            resolve({
              url: url,
            });
          });
      }
    );
  });
};

const submitImage = (file) => {
   
  return new Promise((resolve, reject) => {
  if (!file) {
    return reject("file missed");
  }

  new Compressor(file, {
    quality: 0.1,
    minHeight: 720,
    minWidth: 720,
    success: async (CompressedImg) => {
        resolve(await sendImage(CompressedImg)) ;
    },
    error(err) {
        reject(err.message);
    },
  });
});
};

export default submitImage ;
  
