

const list = JSON.parse(localStorage.getItem('list')) || []
function CartAdding({ img, pName, price, id }) {
  const newItem = { img, pName, price, id }
  list.push(newItem)
  localStorage.setItem('list', JSON.stringify(list))
  console.log(list)
}

export { CartAdding,list }
