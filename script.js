const submit = document.querySelector(".l-submit")
const inputEmail = document.getElementById('input')
const iconError = document.getElementById('iconError')
const textError = document.getElementById('textError')

submit.addEventListener('click', validate)

function validate(e){
    e.preventDefault()
    
    const inputValue = input.value.trim()

    if (inputValue === "" || !isEmailValidy(inputEmail.value)){
        textError.style.display = 'block'
        iconError.style.display = 'block'
    } else {
        textError.style.display = ''
        iconError.style.display = ''
        console.log("Submit")
    }
}

function isEmailValidy(input){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if (emailRegex.test(input)){
        return true 
    }
    return false
}

