// #addForm > input.btn.btn-dark

const formSubmit = (e) => {
  //   e.preventDefault()
  e.preventDefault()
  const inputValue = document.getElementById('item').value
  const list = document.getElementById('items')

  const listChild = document.createElement('li')
  listChild.className = 'list-group-item'
  listChild.innerText = inputValue

  const delButton = document.createElement('button')
  delButton.className = 'btn btn-danger btn-sm float-right delete'
  delButton.innerText = 'X'

  listChild.appendChild(delButton)

  list.appendChild(listChild)
  inputValue.value = ''
  console.log(listChild)
}

const removeItem = (e) => {
  if (e.target.classList.contains('delete')) {
    const removal = e.target.parentElement
    const items_secondary = document
      .getElementById('items')
      .removeChild(removal)
  } else {
    // Nothing
  }
}

const searchItem = (e) => {
  const text = e.target.value.toLowerCase()
  const li_items = document.getElementsByTagName('li')
  Array.from(li_items).forEach((item) => {
    if (item.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}

const button = document
  .querySelector('#addForm')
  .addEventListener('submit', formSubmit)

const itemList = document
  .getElementById('items')
  .addEventListener('click', removeItem)

const filterInput = document
  .getElementById('filter')
  .addEventListener('keyup', searchItem)

// -----------------------------------------------------------------------
