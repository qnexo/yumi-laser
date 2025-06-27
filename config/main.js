

// === Configuration par défaut ===
const config = {
  version: "1.0.0",
  language: "FR",
  selectedMachine: "Diode",
  selectedSoftware: "LightBurn",
  previewSize: { x: 150, y: 150 },
};

// === Données utilisateurs ===
let params = {
  columns: 11,
  rows: 11,
  width: 400,
  height: 400,
  speedMin: 2000,
  speedMax: 5000,
  powerMin: 10,
  powerMax: 80,
  dpi: 318,
  overscan: 2.5,
  angle: 0,
  shape: "Carré",
  testType: "Powerscale",
  mode: "Remplissage",
  label: "",
};

// === Initialisation des éléments ===
function initUI() {
  const sliders = [
    { id: "RangeCX", target: "CX" },
    { id: "RangeCY", target: "CY" },
    { id: "RangeVmin", target: "Vmin" },
    { id: "RangeVmax", target: "Vmax" },
    { id: "RangePmin", target: "Pmin" },
    { id: "RangePmax", target: "Pmax" },
    { id: "RangeSBal", target: "SBal" },
  ];

  sliders.forEach(({ id, target }) => {
    const slider = document.getElementById(id);
    const input = document.getElementById(target);
    slider.oninput = () => {
      input.value = slider.value;
      updateParam(target, slider.value);
      drawPreview();
    };
  });
}

function updateParam(key, value) {
  if (params.hasOwnProperty(key)) {
    params[key] = parseFloat(value);
  }
}

// === Fonction de dessin de l'aperçu ===
function drawPreview() {
  const canvas = document.getElementById("Kpc29Laserfr");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Exemple : dessiner une grille simple
  const stepX = canvas.width / params.columns;
  const stepY = canvas.height / params.rows;

  for (let x = 0; x < params.columns; x++) {
    for (let y = 0; y < params.rows; y++) {
      ctx.strokeStyle = "#ccc";
      ctx.strokeRect(x * stepX, y * stepY, stepX, stepY);
    }
  }

  // Ajouter une étiquette
  if (params.label) {
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(params.label, 10, 20);
  }
}

// === Téléchargement de fichier LightBurn (à adapter) ===
function downloadLBRN() {
  const data = `Fichier LightBurn généré avec ${params.columns} colonnes, ${params.rows} lignes.`;
  const blob = new Blob([data], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "test_lightburn.lbrn";
  a.click();
}

// === Lancement à l’ouverture ===
window.onload = () => {
  initUI();
  drawPreview();
};
