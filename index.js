const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll("button");

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "igual") {
            try {
                const expresion = pantalla.value.replaceAll("×", "*", "%", "/");
                pantalla.value = eval(expresion);
            } catch {
                pantalla.value = "Error";
            }
        } else if (btn.id === "C") {
            pantalla.value = "0";
        } else {
            if (pantalla.value === "0" && btn.id === "punto") {
                pantalla.value = "0.";
            } else if (pantalla.value === "Error") {
                pantalla.value = btn.textContent;
            } else if (pantalla.value === "NaN") {
                pantalla.value = btn.textContent;
            } else if (pantalla.value === "0")   {
                pantalla.value = btn.textContent;
            } else {
                pantalla.value += btn.textContent;
            }
        }
    });
});

document.getElementById("calculadora-button").addEventListener("click", function() {
    document.getElementById("calculadora").style.display = "grid";
    document.getElementById("calculadora-button").style.display = "none"; 
    document.getElementById("cratuda-button").style.display = "none";
    document.getElementById("todasmispracticas").style.display = "none";
    pantalla.value = "0";
});

document.getElementById("cratuda-button").addEventListener("click", function() {
    document.getElementById("cratudallorona").style.display = "block";
    document.getElementById("calculadora-button").style.display = "none"; 
    document.getElementById("cratuda-button").style.display = "none";
    document.getElementById("todasmispracticas").style.display = "none";
    pantalla.value = "0";
});