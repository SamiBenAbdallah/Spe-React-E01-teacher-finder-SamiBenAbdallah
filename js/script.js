const app = {

  init: function() {
    // A toi de jouer
    app.interfaceCreation();
  },

  interfaceCreation: function() {

    // Je récupère le container
    const container = document.querySelector('.container');
    // Je commence par creer un formulaire qui contient un select
    const form = document.createElement('form');
    const select = document.createElement('select');
    const languages = app.data.languages;
    const teachers = app.data.teachers;
    
  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
