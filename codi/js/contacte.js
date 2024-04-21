const formulari = document.getElementById('formulari');
const inputs = document.querySelectorAll('#formulari input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,  
    address: /^[a-zA-Z0-9\.\,\-\s]{4,100}$/,
    date: /^(0[1-9]|[1-2]\d|3[01])(0[1-9]|1[012])\2(\d{4})$/,
}

const campos = {
    name: false,
    address: false,
    date: false,
    gender: false,
    email: false,
    password: false
}

const validarFormulari = (e) => {
    switch (e.target.name) {
        case "name":
            if(expresiones.name.test(e.target.value)){
                document.getElementById('group_name').classList.remove('formulari__grup-incorrecto');
                document.getElementById('group_name').classList.add('formulari__grup-correcto');
                document.querySelector('#group_name .formulari__input-error').classList.remove('formulari__input-error-active');
                campos['name'] = false;
            } else {
                document.getElementById('group_name').classList.add('formulari__grup-incorrecto');
                document.getElementById('group_name').classList.remove('formulari__grup-correcto');
                document.querySelector('#group_name .formulari__input-error').classList.add('formulari__input-error-active');
                campos['name'] = true;
            }
        break;
        case "address":
            if(expresiones.address.test(e.target.value)){
                document.getElementById('group_address').classList.remove('formulari__grup-incorrecto');
                document.getElementById('group_address').classList.add('formulari__grup-correcto');
                document.querySelector('#group_address .formulari__input-error').classList.remove('formulari__input-error-active');
                campos['address'] = false;
            } else {
                document.getElementById('group_address').classList.add('formulari__grup-incorrecto');
                document.getElementById('group_address').classList.remove('formulari__grup-correcto');
                document.querySelector('#group_address .formulari__input-error').classList.add('formulari__input-error-active');
                campos['address'] = true;
            }
        break;
        case "date":
            
        break;
        case "gender":
        
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('group_email').classList.remove('formulari__grup-incorrecto');
                document.getElementById('group_email').classList.add('formulari__grup-correcto');
                document.querySelector('#group_email .formulari__input-error').classList.remove('formulari__input-error-active');
                campos['email'] = false;
            } else {
                document.getElementById('group_email').classList.add('formulari__grup-incorrecto');
                document.getElementById('group_email').classList.remove('formulari__grup-correcto');
                document.querySelector('#group_email .formulari__input-error').classList.add('formulari__input-error-active');
                campos['email'] = true;
            }        
        break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('group_password').classList.remove('formulari__grup-incorrecto');
                document.getElementById('group_password').classList.add('formulari__grup-correcto');
                document.querySelector('#group_password .formulari__input-error').classList.remove('formulari__input-error-active');
                campos['password'] = false;
            } else {
                document.getElementById('group_password').classList.add('formulari__grup-incorrecto');
                document.getElementById('group_password').classList.remove('formulari__grup-correcto');
                document.querySelector('#group_password .formulari__input-error').classList.add('formulari__input-error-active');
                campos['password'] = true;
            }
        break;
        case "password2":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('group_password-repeat').classList.remove('formulari__grup-incorrecto');
                document.getElementById('group_password-repeat').classList.add('formulari__grup-correcto');
                document.querySelector('#group_password-repeat .formulari__input-error').classList.remove('formulari__input-error-active');
            } else {
                document.getElementById('group_password-repeat').classList.add('formulari__grup-incorrecto');
                document.getElementById('group_password-repeat').classList.remove('formulari__grup-correcto');
                document.querySelector('#group_password-repeat .formulari__input-error').classList.add('formulari__input-error-active');
            }        
        break;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulari);
    input.addEventListener('blur', validarFormulari);
})

formulari.addEventListener('submit', (e) => {
    e.preventDefault();

    const accept = document.getElementById('accept');
    if(campos.name && campos.address && campos.date && campos.email && campos.password && accept.checked){
        formulari.reset();

        document.getElementById('formulari__messaje-exit').classList.add('formulari__messaje-exit-active');
    }
});