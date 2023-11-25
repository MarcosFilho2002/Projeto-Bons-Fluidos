document.querySelector('.login').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'block';
    let containerRegistrar = document.querySelector('.container-registrar');
    containerRegistrar.style.display = 'none';
});

document.querySelector('.btn-fechar').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'none';
    document.querySelector('.input-email').value = '';
    document.querySelector('.input-senha').value = '';
});

document.querySelector('.registrar').addEventListener('click', ()=>{
    let containerRegistrar = document.querySelector('.container-registrar');
    containerRegistrar.style.display = 'block';
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'none';
});

document.querySelector('.btn-fechar-registro').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-registrar');
    containerLogin.style.display = 'none';
    document.querySelector('.input-email').value = '';
    document.querySelector('.input-senha').value = '';
});
