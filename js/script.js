const app = {

  // Données de l'application
  data: {
    languages: ['PHP', 'JavaScript'],
    teachers: [{
        name: 'Loris',
        language: 'PHP',
        speciality: 'WordPress',
      },
      {
        name: 'Jean',
        language: 'JavaScript',
        speciality: 'Data',
      },
      {
        name: 'Jean-Christophe',
        language: 'PHP',
        speciality: 'Symfony',
      },
      {
        name: 'Jean-Philippe',
        language: 'PHP',
        speciality: 'Symfony',
      },
      {
        name: 'Julien',
        language: 'PHP',
        speciality: 'React',
      },
      {
        name: 'Vincent',
        language: 'JavaScript',
        speciality: 'React',
      },
      {
        name: 'Tony',
        language: 'JavaScript',
        speciality: 'React',
      },
    ]
  },

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
    let selectedLangague;

    // Je crée une option par language pour mon select
    languages.forEach(function (value) {
      // Pour chaque valeur, je crée une option
      const option = document.createElement('option');
      // Je lui donne une valeur
      option.value = value;
      // Je lui donne un texte
      option.textContent = value;

      // Je l'ajoute au select
      select.appendChild(option);

    });
    
    form.appendChild(select);
    container.appendChild(form);
    
  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
