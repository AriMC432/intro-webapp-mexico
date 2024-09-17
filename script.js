const verdeSlider = document.getElementById('verdeSlider');
const rojoSlider = document.getElementById('rojoSlider');
const verdeRGB = document.getElementById('verdeRGB');
const rojoRGB = document.getElementById('rojoRGB');

verdeSlider.addEventListener('input', function () {
    const greenValue = verdeSlider.value;
    const color = `#00${parseInt(greenValue).toString(16).padStart(2, '0')}00`;
    document.querySelector('.verde').style.backgroundColor = color;
    verdeRGB.textContent = color.toUpperCase();
});

rojoSlider.addEventListener('input', function () {
    const redValue = rojoSlider.value;
    const color = `#${parseInt(redValue).toString(16).padStart(2, '0')}0000`;
    document.querySelector('.rojo').style.backgroundColor = color;
    rojoRGB.textContent = color.toUpperCase();
});

