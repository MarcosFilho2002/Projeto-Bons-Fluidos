document.querySelector('.login').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'block';
});

document.querySelector('.btn-fechar').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'none';
    document.querySelector('.input-email').value = '';
    document.querySelector('.input-senha').value = '';
});

document.querySelector('.input-email').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-tres');
    alerta.style.display = 'none';
});
document.querySelector('.input-senha').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-tres');
    alerta.style.display = 'none';
});

document.querySelector('.input-email').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-email');
    alerta.style.display = 'none';
});

document.querySelector('.input-senha').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-senha');
    alerta.style.display = 'none';
});

document.querySelector('.input-email').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-bd');
    alerta.style.display = 'none';
});
document.querySelector('.input-senha').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-bd');
    alerta.style.display = 'none';
});


document.querySelector('.btn-entrar').addEventListener('click', ()=>{
    let email = document.querySelector('.input-email').value;
    let senha = document.querySelector('.input-senha').value;

    if(email.length === 0){
        let alerta = document.querySelector('.alerta-email');
        alerta.style.display = 'block';
        document.querySelector('.input-email').value = '';
        document.querySelector('.input-senha').value = '';

    }else if(senha.length === 0){
        let alerta = document.querySelector('.alerta-senha');
        alerta.style.display = 'block';

    }else if(email.length < 3 || senha.length < 3){
        let alerta = document.querySelector('.alerta-tres');
        alerta.style.display = 'block';
    }
});