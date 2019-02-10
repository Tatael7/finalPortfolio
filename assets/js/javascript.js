
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUhBTS3JndJU6Ai8GWyUl0udbBxjHwDWY",
    authDomain: "testing-600b3.firebaseapp.com",
    databaseURL: "https://testing-600b3.firebaseio.com",
    projectId: "testing-600b3",
    storageBucket: "testing-600b3.appspot.com",
    messagingSenderId: "200196981739"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  $("#send").on("click", function(event) {
    event.preventDefault();
    var nombre = $("#nombre").val().trim();
    var mensage = $("#mensage").val().trim();
    var email = $("#email").val().trim();

    var Persona = {
        Nombre : nombre,
        Mensage : mensage,
        EMail : email
    };

    database.ref().push(Persona);

  });