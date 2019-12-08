class MyLibrary {
    constructor(bookTitle, bookAuthor, pages, addBookBtn, readYet = false) {
        this.bookTitle = bookTitle,
        this.bookAuthor = bookAuthor,
        this.pages = pages,
        this.readYet = readYet,
        this.addBookBtn = addBookBtn

        this.addBookBtn.addEventListener('click', this.addBook)
    }
    myBooks = [];
    booksReadCounter = 0;
    addBook = () => {
        const book = {
            title: bookTitle.value,
            author: bookAuthor.value,
            pages: bookPages.value,
            readYet: this.readYet
        }
        this.myBooks.push(book)
        this.renderBook(book)
    }
    resetInputs = () => {
        this.bookTitle.value = ''
        this.bookAuthor.value = ''
        this.pages.value = ''
        addBookBtn.disabled = !addBookBtn.disabled;
        btnDisable()
    }
    renderBook = ({title, author, pages}) => {
        const newCard = document.createElement('div');
        newCard.setAttribute('class', 'card toRead')
        newCard.innerHTML = 
            `<div class="card-body">
                <ul style="list-style-type: none">
                    <li class="card-text">${title.toUpperCase()}</li>
                    <li class="card-text">${author.toUpperCase()}</li>
                    <li class="card-text">${pages.toUpperCase()} pages</li>
                </ul>
            </div>`;
        cardsContainer.appendChild(newCard)
        this.resetInputs()
        this.ToggleShowBook(newCard)
    }
    ToggleShowBook = (book) => {
        const thisBook = this.myBooks[this.myBooks.length - 1]
        book.addEventListener('click', (e) => {
            this.ToggleReadInArray(thisBook, book)
            if (thisBook.readYet) {
                book.classList.remove('toRead')
                book.classList.add('haveRead')
            } else {
                book.classList.remove('haveRead')
                book.classList.add('toRead')
            }
        })
    }
    ToggleReadInArray = (book, bookDiv) => {
        if (book.readYet) {
            return this.deleteBook(book, bookDiv)
        }
        book.readYet = !book.readYet
        this.booksReadCounter++
            document.getElementById('booksReadCounterText').innerHTML = this.booksReadCounter
    }
    deleteBook = (book, bookDiv) => {
        const findBook = this.myBooks.findIndex((eachBook) => {
            return eachBook.title === book.title
        })
        if (this.myBooks[findBook] && confirm('Delete book out of library or cancel to set to unread?')) {
            this.myBooks.splice(findBook, 1)
            bookDiv.style.display = 'none'
        } else {
            book.readYet = !book.readYet
            bookDiv.classList.remove('haveRead')
            bookDiv.classList.add('toRead')
            this.booksReadCounter--
            document.getElementById('booksReadCounterText').innerHTML = this.booksReadCounter
        }
    }
}