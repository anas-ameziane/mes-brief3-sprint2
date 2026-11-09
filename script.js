
const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};
const btn = document.getElementById("btn")
function aff() {
 
  const listeAteliers = document.getElementById("liste-ateliers");
  const listeModes = document.getElementById("liste-modes");

  config.ateliers.forEach((atelier) => {
     if (atelier.places > 0) {
    const carte = document.createElement("label");
    carte.className = "carte-choix";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "atelier";
    input.value = atelier.id;
    input.required = true;

    const texte = document.createElement("span");
    const titre = document.createElement("strong");
    titre.textContent = atelier.titre;
    titre.className = "atelier-titre";

    const detail = document.createElement("span");
    detail.className = "atelier-places detail";
    detail.textContent = `${atelier.places} places disponibles`;

    texte.append(titre, detail);
    carte.append(input, texte);
    listeAteliers.append(carte);
  }});
    const carte = document.createElement("label");
    carte.className = "carte-choix";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "mode";
    input.value = value;
    input.required = true;
    input.checked = index === 0;

    const texte = document.createElement("span");
    texte.textContent = libelle;
    texte.className = "mode-libelle";

    carte.append(input, texte);
    listeModes.append(carte);
  };

aff();
  

 


