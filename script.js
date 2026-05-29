// YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();


// ==========================
// FILE PATHS
// ==========================
const PATH = "./";

const files = {

  resume: "suhani_resume.pdf",

  smg: "Kabira Final deck2.pdf",

  superyou: "superyou.pdf",

  delhivery:
    "GTM Strategy to Unlock Consumer & SMB Intra-City Logistics for Delhivery (1)_compressed.pdf",

  swiggy:
    "FoodieWe(1).pdf"
};


// ==========================
// HELPERS
// ==========================
function openFile(fileName){
  window.open(
    PATH + encodeURIComponent(fileName),
    "_blank"
  );
}

function downloadFile(fileName){

  const a = document.createElement("a");

  a.href = PATH + encodeURIComponent(fileName);

  a.download = fileName;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
}


// ==========================
// RESUME
// ==========================
document
  .getElementById("downloadResume")
  .onclick = () => downloadFile(files.resume);


// ==========================
// CASE STUDIES
// ==========================

// SMG
document
  .getElementById("viewSMG")
  .onclick = () => openFile(files.smg);


// SUPERYOU
document
  .getElementById("viewSuperYou")
  .onclick = () => openFile(files.superyou);


// DELHIVERY
document
  .getElementById("viewDelhivery")
  .onclick = () => openFile(files.delhivery);


// SWIGGY
document
  .getElementById("viewSwiggy")
  .onclick = () => openFile(files.swiggy);
