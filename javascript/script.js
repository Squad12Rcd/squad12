function showPassword () {
    let inputPass = document.getElementById('password')
    let btnShowPass = document.getElementById('btn-password')

    if(inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('fa-eye','fa-eye-slash')
    } else {
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('fa-eye-slash','fa-eye')
    }
}

function cpfMask() {
    const cpfInput = document.getElementById('cpf')
    let cpfInputLength = cpfInput.value.length
    if (cpfInputLength === 3 || cpfInputLength === 7) {
        cpfInput.value += '.'
    } else if(cpfInputLength === 11) {
        cpfInput.value += '-'
    }
}

function cnpjMask() { 
    const cnpjInput = document.getElementById('cnpj')
    let cnpjInputLength = cnpjInput.value.length
    if (cnpjInputLength === 2 || cnpjInputLength === 6) {
        cnpjInput.value += '.'
    } else if(cnpjInputLength === 10) {
        cnpjInput.value += '/'
    } else if(cnpjInputLength === 15) {
        cnpjInput.value += '-'
    }
}
