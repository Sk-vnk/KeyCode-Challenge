const key = document.getElementById('keyCode');
const keyValue = document.getElementById('keyValue');
const charCode = document.getElementById('charCode');

document.addEventListener('keypress', (event) => {
        keyValue.textContent = event.which;
        charCode.textContent = event.code;
        key.textContent = event.key;

});




