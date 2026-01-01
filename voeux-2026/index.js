const wishes = [
    {
    id: 1,
    message: `Que l'année 2026 soit pour toi un déploiement continu de succès, sans aucun bug de production. 
    Que ton architecture de vie soit scalable, résiliente et exempte de dettes techniques accumulées par le stress du passé. 
    Je te souhaite un environnement de travail où chaque compilation est un succès immédiat et où tes projets personnels passent enfin en version stable. 
    Puisse ton "Main" être rempli de bonheur et tes exceptions de tristesse être attrapées par un bloc 'try-catch' de sérénité absolue. 
    Que ta bande passante émotionnelle soit illimitée et que tes relations soient aussi solides qu'une clé de chiffrement RSA-4096. 
    Bonne année, et que ton café soit toujours chaud et ton code toujours propre !`
  },
  {
    id: 2,
    message: `En cette nouvelle année, je te souhaite une homéostasie parfaite entre ta vie professionnelle dévouée et ton bien-être personnel. 
    Que ton rythme cardiaque s'accorde à la mélodie de la paix intérieure et que ton système immunitaire soit une barrière infranchissable face aux soucis du quotidien. 
    Puisse ton empathie rester ton plus beau stéthoscope et ton sourire le meilleur des remèdes pour tes patients. 
    Je te souhaite des gardes calmes, des diagnostics évidents et une dose quotidienne de dopamine générée par la gratitude de ceux que tu soignes. 
    Que 2026 soit une année de vitalité cellulaire, de régénération mentale et de bonheur non pathogène. 
    Merci pour ton dévouement, et excellente année de santé globale !`
  },
  {
    id: 3,
    message: `Que 2026 soit une année en haute résolution, riche en contrastes harmonieux et en palettes de couleurs vibrantes. 
    Je te souhaite de trouver l'équilibre parfait entre la forme et la fonction dans tout ce que tu entreprendras. 
    Puisse ton inspiration ne jamais connaître de page blanche et que tes calques de vie se superposent pour créer un chef-d'œuvre de bonheur. 
    Que chaque pixel de ton quotidien soit aligné sur la grille de tes rêves les plus audacieux. 
    Je te souhaite des clients qui comprennent ta vision, des rendus qui dépassent tes attentes et une créativité qui coule avec la fluidité d'un vecteur parfait. 
    Que ton année soit un "Export" réussi vers la joie et l'accomplissement artistique !`
  },
  {
    id: 4,
    message: `Je te souhaite une année 2026 sous le signe d'une croissance exponentielle, non seulement pour tes chiffres, mais surtout pour ton épanouissement. 
    Que ton ROI (Retour sur Investissement) personnel soit immense et que tes risques soient toujours calculés avec sagesse. 
    Puisse ton networking t'apporter des alliés précieux et tes défis se transformer en opportunités de pivot stratégique. 
    Je te souhaite un "Cash-flow" de bonheur constant et une vision à long terme qui te porte vers les sommets de ton secteur. 
    Que ta résilience soit ton capital le plus précieux et que chaque jour soit une levée de fonds pour ton enthousiasme !`
  }
];
function initYearProject() {
    // 1. Récupérer le nom de l'utilisateur dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || "Invité";
    
    // 2. Mettre à jour le nom et l'avatar
    document.getElementById('user-name').innerText = name;
    document.getElementById('user-avatar').src = `https://ui-avatars.com/api/?name=${name}&background=random&size=128`;
    
    // 3. Afficher un vœu aléatoire
    generateNewWish();
}

function generateNewWish() {
    const textElement = document.getElementById('dynamic-message');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    // Ajout d'une petite animation de transition
    textElement.classList.remove('animate__fadeIn');
    void textElement.offsetWidth; // Reset animation
    textElement.innerText = randomWish.message;
    textElement.classList.add('animate__animated', 'animate__fadeIn');
}

window.onload = initYearProject;