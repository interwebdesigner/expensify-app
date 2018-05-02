import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};




// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });



// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses').push({
//     description: 'Gas Bill',
//     note: 'Gas bill note',
//     amount: 1000,
//     createdAt: 10000
// });

//database.ref('notes/-LBCqObMx15L-dyx-km8').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         apoijasdfpoijwe: {
//             title: 'Another note!',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '12761ase',
//     title: 'Another note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Error with data fecting', e);
// });


// database.ref('name').set('Chris Walsh');

// setTimeout(() => {
//     database.ref('name').set('Mike Jones');
// }, 7000);
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }) 
//     .catch((e) => {
//         console.log('Error fetching data!');
//     });

// database.ref().remove()
// .then(function() {
//     console.log("Remove succeeded.")
// })
// .catch(function(error) {
//     console.log("Remove failed: " + error.message)
// });

// database.ref().set({
// name: 'Chris Walsh',
// age: 42,
// stressLevel: 6,
// job: {
//     title: 'Software Developer',
//     company: 'Google'
// },
// isSingle: true,
// location: {
//     city: 'Wigan',
//     country: 'United Kingdom'
// }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// //database.ref().set('This is my data');

// // database.ref('age').set(43);
// // database.ref('location/city').set('Manchester');

// database.ref('attributes').set({
//     height: 175,
//     weight: 160
// }).then(() => {
//     console.log('Attributes updates');
// }).catch((e) => {
//     console.log('Update Failed!', e)
// });