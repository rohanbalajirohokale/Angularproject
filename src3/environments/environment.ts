// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = 
{
  production: false,
  // Add this to access firebase in our project
  firebase :
  {
    
      apiKey: "AIzaSyDIE231ONQYfstN99jv4YAHnqTHy6E3O2o",
      authDomain: "sairam-ce240.firebaseapp.com",
      databaseURL: "https://sairam-ce240.firebaseio.com",
      projectId: "sairam-ce240",
      storageBucket: "sairam-ce240.appspot.com",
      messagingSenderId: "549913239985"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
