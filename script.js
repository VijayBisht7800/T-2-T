var firebaseConfig = {
  apiKey: 'AIzaSyAx6gg7p5BubqKWeQrplfHa4bjFJff_lFM',
  authDomain: 't-2-t-3054f.firebaseapp.com',
  databaseURL: 'https://t-2-t-3054f.firebaseio.com',
  projectId: 't-2-t-3054f',
  storageBucket: 't-2-t-3054f.appspot.com',
  messagingSenderId: '982142711919',
  appId: '1:982142711919:web:99b2c04f192dbb4850759a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

$('document').ready(function () {
  $('#btn').click(function () {
    $('#login').modal('toggle');
  });
  $('#btn1').click(function () {
    $('#signup').modal('toggle');
  });
});

var btn = document.getElementById('info-form');
btn.addEventListener('submit', getLocation);
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('GeoLocation not supported in this Browser');
  }
}
function showPosition(position) {
  alert(position.coords.latitude);
  alert(position.coords.longitude);
}
btn.addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  console.log('Hello');
  //Getting All the Values
  var fname = getInputVal('f-name');
  var lname = getInputVal('l-name');
  var cnumber = getInputVal('cnumber');
  var email = getInputVal('email');
  var state = getInputVal('state');
  var city = getInputVal('city');
  saveMessage(fname, lname, cnumber, city, email, state);
}

//Function get Form Values

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(fname, lname, cnumber, email, state, city) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstName: fname,
    LastName: lname,
    Contact: cnumber,
    Email: email,
    State: state,
    City: city,
  });
  alert('Thanks! Response Recorded');
}
