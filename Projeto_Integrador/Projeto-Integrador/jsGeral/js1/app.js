const button = document.getElementById('botaoPopup')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    console.log('clicou')
    popup.style.display = 'block'
})
popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClosePopup = classNames.some(className =>
        className === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = 'none'
    }
})

