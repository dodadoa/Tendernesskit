const firebaseConfig = {
  apiKey: "AIzaSyB1N_cqSRDqq4NH54sV2g6yfMBDTD4CIiA",
  authDomain: "tendernesskit.firebaseapp.com",
  projectId: "tendernesskit",
  storageBucket: "tendernesskit.appspot.com",
  messagingSenderId: "797975857976",
  appId: "1:797975857976:web:4615b5cdbd5fda6ea7cfcd",
  measurementId: "G-JL04L7JV61"
};

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(firebaseConfig)
  firebaseInstance = firebase

  return firebase
}
