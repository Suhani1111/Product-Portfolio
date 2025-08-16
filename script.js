// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Files in /assets
const PATH="./";
const files={resume:"SUHANI KAUR SALUJA RESUME.pdf",hemp:"HEMP VITAL.pdf",finance:"Studentfinance.pdf"};

// Helpers
function openFile(f){window.open(PATH+f,"_blank");}
function downloadFile(f){const a=document.createElement("a");a.href=PATH + encodeURIComponent(f);a.download=f;document.body.appendChild(a);a.click();document.body.removeChild(a);
}

// Resume
document.getElementById("downloadResume").onclick=()=>downloadFile(files.resume);

// Case Studies
document.getElementById("viewFinance").onclick=()=>openFile(files.finance);
document.getElementById("viewHemp").onclick=()=>openFile(files.hemp);
document.getElementById("viewProjects").onclick=()=>openFile(files.resume); // placeholder for highlights
