// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {

  auth0: {
    clientID: 'XRlRAFXhN3vmuXe2t4fdGDGpZd7zuD5I',
    domain: 'rudiger.auth0.com'
  },
  firebase: {
    apiKey: "AIzaSyC6ddc4ZrABax1cUHirLWJ1gLVdJttrWzI",
    authDomain: "whistle-1478878853329.firebaseapp.com",
    databaseURL: "https://whistle-1478878853329.firebaseio.com",
    storageBucket: "whistle-1478878853329.appspot.com",
    messagingSenderId: "940933254762"
  },
  production: true,
  silent: false
};
