// Exemple de données pour les régions (simulées)
const regions = {
    nord: "Informations sur les troubles Dys dans la région Nord.",
    sud: "Informations sur les troubles Dys dans la région Sud."
  };

  // Fonction pour afficher les informations d'une région
  function afficherInfo(region) {
    alert(regions[region]);
  }

  // Ajout d'écouteurs d'événements pour les régions
  document.getElementById('carte').addEventListener('click', (event) => {
    const region = event.target.getAttribute('data-region');
    if (region) {
      afficherInfo(region);
    }
  });


  // Sélectionne tous les liens dans le menu de navigation
  const links = document.querySelectorAll('nav ul li a');

  // Ajoute un écouteur d'événement pour chaque lien
  links.forEach(link => {
      link.addEventListener('click', (event) => {
      // Empêche le comportement par défaut du lien
      event.preventDefault();
      // Récupère l'ID de la section cible
      const targetId = link.getAttribute('href').substring(1);
      // Défile jusqu'à la section cible
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
});
});

//Explication: Ce code ajoute une validation de formulaire pour vérifier 
//que tous les champs sont remplis avant de permettre la soumission.
// Sélectionne le formulaire
const formulaire = document.querySelector('form');

// Ajoute un écouteur d'événement pour la soumission du formulaire
formulaire.addEventListener('submit', (event) => {
  // Sélectionne les champs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Vérifie que tous les champs sont remplis
  if (!nom || !email || !message) {
    // Empêche la soumission du formulaire
    event.preventDefault();
    // Affiche un message d'alerte
    alert('Tous les champs doivent être remplis.');
  }
});


// Inclusion de la bibliothèque Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
// Création du graphique avec Chart.js
const myChart = new Chart(ctx, {
  type: 'bar', // Type de graphique
  data: {
    labels: ['Dyslexie', 'Dysorthographie', 'Dyspraxie', 'Dyscalculie', 'Dysphasie'],
    datasets: [{
      label: 'Nombre de cas le plus élevé',
      data: [50, 30, 20, 10, 5], // Données simulées
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71']
    }]
  },
  options: {
    responsive: true
  }
});
// Explication: Ce code utilise Chart.js pour créer un graphique à barres 
// représentant les statistiques des différents troubles Dys.


const map = L.map('map').setView([43.5363, 6.4643], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([43.5363, 6.4643]).addTo(map)
    .bindPopup('Draguignan, France')
    .openPopup();

    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Auto slide
    setInterval(nextImage, 3000);


// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});