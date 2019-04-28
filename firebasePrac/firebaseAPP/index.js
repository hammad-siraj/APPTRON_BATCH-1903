
import {AppRegistry} from 'react-native';
import App from './App';
import firebase from 'firebase'
import {name as appName} from './app.json';



  
var config = {
  apiKey: "AIzaSyBylYc48TfQYPg-EED7SBLdkwheOZxV3uY",
    authDomain: "fir-a4cac.firebaseapp.com",
    databaseURL: "https://fir-a4cac.firebaseio.com",
    projectId: "fir-a4cac",
    storageBucket: "fir-a4cac.appspot.com",
    messagingSenderId: "918705466408"
};
firebase.initializeApp(config);

  AppRegistry.registerComponent(appName, () => App);
