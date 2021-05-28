var user_data = [];


function addNew() {
    var validation = true;
    var fullname = document.getElementById('fullname');
    var email = document.getElementById('email');
    var edad = document.getElementById('edad');

    if ( isBlank( fullname.value ) ) {
        alert('el nombre es requerido');
        validation = false;
    }

    if ( isBlank( email.value ) ) {
        alert('el email es requerido');
        validation = false;
    }

    if ( isBlank( edad.value ) ) {
        alert('La edad es requerida');
        validation = false;
    }

    if (!isValidEmail( email.value )) {
        alert('Ingrese un email valido');
        validation = false;
    }

    if (validation) {
        
        var data = {
            fullname: fullname.value,
            email: email.value,
            edad: edad.value
        };

        user_data.push( data );
        console.table( user_data );
        get();
    } 
    

};

function isBlank( str ) {
    var rex = /^\s*$/;
    return (!str || rex.test( str ) )
}

function isValidEmail( email ) {
    var rex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return rex_email.test( email );
}

function get() {
    var template = '';
    var user_data_list = document.getElementById('user_data_list');
    user_data.forEach( ( value, key ) => {
        template += `
            <tr>
            <td> ${value.fullname} </td>
            <td> ${value.email} </td>
            <td> ${value.edad} </td>
            <td> <button onclick='deleteData(${key})'> Delete </button> </td>
            </tr>
        `; 
    });
    user_data_list.innerHTML = template;
    Minimo();
    Maximo();
}

function deleteData( key ) {
    var confirmacion = confirm(' ¿Estas seguro de eliminar? ');
    if (confirmacion) {
        user_data.splice( key, 1 );
        get();
    }
}

function Minimo() {
    var min = 999999;
    var edad_menor = document.getElementById('edad_menor');
    user_data.forEach((value, key) => {
        if (value.edad < min) {
            min = value.edad;
        }
    });
    edad_menor.innerHTML = min;
}

function Maximo() {
    var max = 0;
    var edad_mayor = document.getElementById('edad_mayor');
    user_data.forEach((value, key) => {
        if (value.edad > max) {
            max = value.edad;
        }
    });
    edad_mayor.innerHTML = max;
}