const bookTitle = document.getElementById('bookTitle')
const bookAuthor = document.getElementById('bookAuthor')
const bookPages = document.getElementById('bookPages')
const addBookBtn = document.getElementById('addBookBtn')
const cardsContainer = document.getElementById('cardsContainer')

addBookBtn.disabled = true;

bookPages.addEventListener('input', () => {
    return new Promise((res, rej) => {
        if (bookTitle.value != '' && bookAuthor.value != '' && bookPages.value != '') {
            return res()
        }
        return rej()
    }).then(() => {
        addBookBtn.disabled = false
        btnDisable()
    })
    .catch(() => {
        addBookBtn.disabled = true
        btnDisable()
    })
})

const btnDisable = () => {
    if (addBookBtn.disabled) {
        addBookBtn.classList.remove('notDisabled')
        addBookBtn.classList.add('disabled')
    } else {
        addBookBtn.classList.remove('disabled')
        addBookBtn.classList.add('notDisabled')
    }
}

const addNewBook = new MyLibrary(bookTitle, bookAuthor, bookPages, addBookBtn)
