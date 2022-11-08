function verificar() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let mail = document.getElementById('mail').value;
    let cel = document.getElementById('cel').value;
    let cant = document.getElementById('cant').value
    if (name.length < 1) {
        alert('Falta rellenar el nombre');
        return false;
    }
    if (surname.length < 1) {
        alert('Falta rellenar el apellido');
        return false;
    }
    if (mail.length < 1) {
        alert('Falta rellenar el email');
        return false;
    }
    if (cel.length < 1) {
        alert('Falta el numero de telefono');
        return false;
    }
    if (cant.length >500) {
        alert('Numero de caracteres excedido, no pueden ser mas de 500');
        return true;
    }
}
function countChars(obj){
    let charNum = document.getElementById('charNum').innerHTML = obj.value.length+' (500 caracteres como maximo)';
}
