document.addEventListener('DOMContentLoaded', function() {
    const formRandomNumberEl = document.querySelector('#form-random-number')
    
    formRandomNumberEl.addEventListener('submit', function(e) {
        e.preventDefault();

        let randomNumberEl = parseInt(document.querySelector('#max-number').value)
        const resultEl = document.querySelector('#result')
        const resultContainerEl = document.querySelector('.result-container')

        randomNumberEl = Math.random() * randomNumberEl
        randomNumberEl = Math.floor(randomNumberEl + 1)

        resultContainerEl.style.display = 'block'
        resultEl.innerText = randomNumberEl
    })
})