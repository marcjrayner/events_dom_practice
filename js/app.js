document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleSubmit);

  const clearList = document.querySelector('#clear');
  clearList.addEventListener('click', handleClear)

});

// const handleSubmit = function (event) {
//   event.preventDefault()
//
//   const newBook = document.createElement('li')
//   newBook.textContent = `Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`
//
//   const bookList = document.querySelector('#reading-list')
//   bookList.appendChild(newBook);
//
//   document.querySelector('#new-item-form').reset();
// };


const handleSubmit = function (event) {
  event.preventDefault()

  const newTitle = document.createElement('h2')
  newTitle.textContent = `${event.target.title.value}`
  const newAuthor = document.createElement('h3')
  newAuthor.textContent = `${event.target.author.value}`
  const newCategory = document.createElement('p')
  newCategory.textContent = `${event.target.category.value}`


  const newBook = document.createElement('div')
  newBook.classList.add('booklist')
  newBook.appendChild(newTitle)
  newBook.appendChild(newAuthor)
  newBook.appendChild(newCategory)


  const bookList = document.querySelector('#reading-list')
  bookList.appendChild(newBook);

  document.querySelector('#new-item-form').reset();
};


const handleClear = function (event) {

  let bookList = document.querySelector('#reading-list')
  while(bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  };

};
