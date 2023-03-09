const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

const isInvisible = modalWrapper.classList.contains('invisible')

if (isInvisible){
    document.addEventListener("keydown", function(event) {
        const isEsc = event.key === 'Escape'

        if (isEsc) {
            modalWrapper.classList.add('invisible')
        }
    })
}
