const result = document.querySelector('.result')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const card = document.querySelector('.card')

btn.addEventListener('click', () => {
    const value = input.value
    // Check Empty Value
    if (value === '') {
        result.innerHTML = 'Error<br/>Number Required'
        card.classList.add('error')
    } else if (value > 999 && value < 10000) {
        // Main Logic - Odd Even
        if (value % 2 === 0) {
            result.innerHTML = 'Even<br/>Allowed on M-W-F'
            card.classList.add('success')
        } else {
            result.innerHTML = 'Odd<br/>Allowed on T-T-S'
            card.classList.add('success')
        }
    }
    else {
        result.innerHTML = 'Error<br/>Only Numbers Allowed<br/>b/w 1000 to 9999'
        card.classList.add('error')
    }
})


