

const changeTypePassword = (target) => {
    const input=document.querySelector('.input-password');
    target.checked ? input.type='text' : input.type='password'
}