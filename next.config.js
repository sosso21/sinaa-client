module.exports = {
  // reactStrictMode: true,
    env: {
      "NAMEWEBSITE" : "SINAA",
      "URLCLIENT":"https://cless.pages.dev",
      "URLSERVER":"http://127.0.0.1:1337",
      "HOST_IMG":"https://firebasestorage.googleapis.com/v0/b/cless-image.appspot.com/o/"
    },
    images: {
      loader: 'imgix',
      path: 'https://firebasestorage.googleapis.com/v0/b/cless-shop.appspot.com/o/',
      domains: ["https://firebasestorage.googleapis.com"]
    },
  } 
  