# Practica 1.4 Bandera Mexicana
## Manejo de Lenguajes HTML, CSS, JS

1. Intento
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bandera de México</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bandera de México</h1>

    <div class="section">
        <h2>Esperanza</h2>
        <label for="greenRange">Verde:</label>
        <input type="range" id="greenRange" min="0" max="255" value="0" oninput="updateColor()">
        <p id="greenCode">RGB(0, 255, 0)</p>
    </div>

    <div class="section">
        <h2>Unidad</h2>
        <label for="whiteRange">Blanco:</label>
        <input type="range" id="whiteRange" min="0" max="255" value="255" oninput="updateColor()">
        <p id="whiteCode">RGB(255, 255, 255)</p>
    </div>

    <div class="section">
        <h2>Sangre de nuestros héroes nacionales</h2>
        <label for="redRange">Rojo:</label>
        <input type="range" id="redRange" min="0" max="255" value="255" oninput="updateColor()">
        <p id="redCode">RGB(255, 0, 0)</p>
    </div>

    <div class="flag">
        <div id="greenSection"></div>
        <div id="whiteSection">
            <img src="escudo_mexicano.png" alt="Escudo Mexicano" id="escudo">
        </div>
        <div id="redSection"></div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    padding: 20px;
}

h1 {
    color: #006400;
}

.section {
    margin-bottom: 20px;
}

input[type=range] {
    width: 300px;
}

.flag {
    display: flex;
    margin-top: 20px;
}

#greenSection, #whiteSection, #redSection {
    width: 100px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#greenSection {
    background-color: green;
}

#whiteSection {
    background-color: white;
    position: relative;
}

#escudo {
    position: absolute;
    max-width: 80px;
}

#redSection {
    background-color: red;
}

function updateColor() {
    const greenValue = document.getElementById("greenRange").value;
    const whiteValue = document.getElementById("whiteRange").value;
    const redValue = document.getElementById("redRange").value;

    // Actualiza la sección verde
    const greenSection = document.getElementById("greenSection");
    greenSection.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;
    document.getElementById("greenCode").textContent = `RGB(0, ${greenValue}, 0)`;

    // Actualiza la sección blanca
    const whiteSection = document.getElementById("whiteSection");
    whiteSection.style.backgroundColor = `rgb(${whiteValue}, ${whiteValue}, ${whiteValue})`;
    document.getElementById("whiteCode").textContent = `RGB(${whiteValue}, ${whiteValue}, ${whiteValue})`;

    // Actualiza la sección roja
    const redSection = document.getElementById("redSection");
    redSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    document.getElementById("redCode").textContent = `RGB(${redValue}, 0, 0)`;
}


2. Segundo intento
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bandera de México</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bandera de México</h1>

    <div class="section">
        <h2>Esperanza</h2>
        <input type="range" id="greenRange" min="0" max="255" value="128" oninput="updateColor()">
        <p id="greenCode">#008200</p>
    </div>

    <div class="section">
        <h2>Unidad</h2>
        <input type="range" id="whiteRange" min="0" max="255" value="255" oninput="updateColor()">
        <p id="whiteCode">#FFFFFF</p>
    </div>

    <div class="section">
        <h2>Sangre de nuestros héroes nacionales</h2>
        <input type="range" id="redRange" min="0" max="255" value="128" oninput="updateColor()">
        <p id="redCode">#800000</p>
    </div>

    <div class="flag">
        <div id="greenSection"></div>
        <div id="whiteSection">
            <img src="escudo_mexicano.png" alt="Escudo Mexicano" id="escudo">
        </div>
        <div id="redSection"></div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    padding: 20px;
}

h1 {
    color: #006400;
    margin-bottom: 30px;
}

.section {
    display: inline-block;
    margin: 20px;
}

input[type=range] {
    width: 300px;
}

.flag {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

#greenSection, #whiteSection, #redSection {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#greenSection {
    background-color: #008200;
}

#whiteSection {
    background-color: white;
    position: relative;
}

#escudo {
    position: absolute;
    width: 100px;
}

#redSection {
    background-color: #800000;
}

function updateColor() {
    const greenValue = document.getElementById("greenRange").value;
    const whiteValue = document.getElementById("whiteRange").value;
    const redValue = document.getElementById("redRange").value;

    // Actualiza la sección verde
    const greenSection = document.getElementById("greenSection");
    greenSection.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;
    document.getElementById("greenCode").textContent = `#${componentToHex(0)}${componentToHex(greenValue)}00`;

    // Actualiza la sección blanca
    const whiteSection = document.getElementById("whiteSection");
    whiteSection.style.backgroundColor = `rgb(${whiteValue}, ${whiteValue}, ${whiteValue})`;
    document.getElementById("whiteCode").textContent = `#${componentToHex(whiteValue)}${componentToHex(whiteValue)}${componentToHex(whiteValue)}`;

    // Actualiza la sección roja
    const redSection = document.getElementById("redSection");
    redSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    document.getElementById("redCode").textContent = `#${componentToHex(redValue)}0000`;
}

// Convierte valores de RGB a hexadecimales
function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
//Modificación del css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    padding: 20px;
}

h1 {
    color: #006400;
    margin-bottom: 30px;
}

.section {
    display: inline-block;
    margin: 20px;
}

input[type=range] {
    width: 300px;
}

.flag {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

#greenSection, #whiteSection, #redSection {
    width: 300px;   /* Aumentamos el ancho de cada sección */
    height: 400px;  /* Aumentamos la altura de cada sección */
    display: flex;
    justify-content: center;
    align-items: center;
}

#greenSection {
    background-color: #008200;
}

#whiteSection {
    background-color: white;
    position: relative;
}

#escudo {
    position: absolute;
    width: 150px;  /* Aumentamos el tamaño del escudo */
}

#redSection {
    background-color: #800000;
}

3. Intento Final
<!DOCTYPE  html>

<html  lang="es">

<head>

<meta  charset="UTF-8">

<meta  name="viewport"  content="width=device-width, initial-scale=1.0">

<title>Bandera de México</title>

<link  rel="stylesheet"  href="style.css">

</head>

<body>

<h1>Bandera de México</h1>

<!-- Controles de color -->

<div  class="controles">

<div  class="control">

<label  for="verdeSlider">Esperanza</label>

<input  type="range"  min="0"  max="255"  value="128"  id="verdeSlider">

<span  id="verdeRGB">#008200</span>

</div>

<div  class="control">

<label  for="blancoSlider">Unidad</label>

<span  id="blancoRGB">#FFFFFF</span>

</div>

<div  class="control">

<label  for="rojoSlider">Sangre de nuestros héroes nacionales</label>

<input  type="range"  min="0"  max="255"  value="0"  id="rojoSlider">

<span  id="rojoRGB">#800000</span>

</div>

</div>

<!-- Bandera Mexicana -->

<div  class="container">

<div  class="bandera">

<div  class="seccion verde"></div>

<div  class="seccion blanco">

<img  src="escudo_mexico.png"  alt="Escudo de México"  class="escudo">

</div>

<div  class="seccion rojo"></div>

</div>

</div>

<script  src="script.js"></script>

</body>

</html>

body  {

font-family:  Arial,  sans-serif;

text-align:  center; }

h1  { margin-bottom:  20px; }

  

.controles  {

display:  flex;

justify-content:  space-around;

margin-bottom:  20px;

}

.control  { text-align:  center; }

input[type=range]  {

width:  200px;

margin-top:  10px;

display:  block;

}

span  {

display:  block;

margin-top:  5px;

}

.container  {

display:  inline-block;

border:  2px  solid  black;

margin-top:  20px;

}

.bandera  {

display:  flex;

width:  1080px;

height:  400px;

}

.seccion  { flex:  1; }

.verde  { background-color:  #008200; }

.blanco  {

background-color:  #FFFFFF;

display:  flex;

justify-content:  center;

align-items:  center;

}

.rojo  { background-color:  #800000;}

.escudo  { height:  250px;}

//JS
const  verdeSlider  =  document.getElementById('verdeSlider');

const  rojoSlider  =  document.getElementById('rojoSlider');

const  verdeRGB  =  document.getElementById('verdeRGB');

const  rojoRGB  =  document.getElementById('rojoRGB');

  

verdeSlider.addEventListener('input',  function  ()  {

const  greenValue  =  verdeSlider.value;

const  color  =  `#00${parseInt(greenValue).toString(16).padStart(2,  '0')}00`;

document.querySelector('.verde').style.backgroundColor  =  color;

verdeRGB.textContent  =  color.toUpperCase();

});

  

rojoSlider.addEventListener('input',  function  ()  {

const  redValue  =  rojoSlider.value;

const  color  =  `#${parseInt(redValue).toString(16).padStart(2,  '0')}0000`;

document.querySelector('.rojo').style.backgroundColor  =  color;

rojoRGB.textContent  =  color.toUpperCase();

});
