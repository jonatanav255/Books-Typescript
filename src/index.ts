interface Book {
  title: string
  author: string
  year: number
}

const books: Book[] = []

// Get references to HTML elements
const addBookPage = document.getElementById('addBookPage') as HTMLElement
const showAllBooksPage = document.getElementById(
  'showAllBooksPage'
) as HTMLElement
const booksList = document.getElementById('booksList') as HTMLElement

// Navigation buttons
const showAddBookButton = document.getElementById(
  'showAddBookButton'
) as HTMLElement
const showAllBooksButton = document.getElementById(
  'showAllBooksButton'
) as HTMLElement

// Form elements
const addBookForm = document.getElementById('addBookForm') as HTMLFormElement
const titleInput = document.getElementById('title') as HTMLInputElement
const authorInput = document.getElementById('author') as HTMLInputElement
const yearInput = document.getElementById('year') as HTMLInputElement

showAddBookButton.addEventListener('click', () => {
  showPage('addBookPage')
})

showAllBooksButton.addEventListener('click', () => {
  showPage('showAllBooksPage')
})

function showPage (pageId: string) {
  // Hide both pages before showing the selected one
  addBookPage.style.display = 'none'
  showAllBooksPage.style.display = 'none'

  // Show the selected page
  if (pageId === 'addBookPage') {
    addBookPage.style.display = 'block'
  } else if (pageId === 'showAllBooksPage') {
    showAllBooksPage.style.display = 'block'
    renderBooksList() // Ensure the books list is rendered when showing this page
  }

  console.log('Switching to page:', pageId) // For debugging
}

// Add book to list
addBookForm.addEventListener('submit', (event: Event) => {
  event.preventDefault()

  const newBook: Book = {
    title: titleInput.value,
    author: authorInput.value,
    year: parseInt(yearInput.value)
  }

  books.push(newBook)
  console.log('Book added:', newBook)

  // Clear form fields
  titleInput.value = ''
  authorInput.value = ''
  yearInput.value = ''
})

function renderBooksList () {
  if (!booksList) {
    console.error('Books list element not found!')
    return
  }

  console.log('Rendering books list...')

  booksList.innerHTML = '' // Clear the current list

  books.forEach((book, index) => {
    const li = document.createElement('li')
    li.textContent = `${index + 1}. ${book.title} by ${book.author}, ${
      book.year
    }`
    booksList.appendChild(li) // Append the list item to the ul
  })

  console.log('Books rendered:', books) // Debugging
}
