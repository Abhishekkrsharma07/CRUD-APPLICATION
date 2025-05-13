let items = JSON.parse(localStorage.getItem('crudItems')) || [];

function renderItems() {
  const list = document.getElementById('itemList');
  list.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item}</span>
      <div class="actions">
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });

  localStorage.setItem('crudItems', JSON.stringify(items));
}

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value) {
    items.push(value);
    input.value = '';
    renderItems();
  }
}

function editItem(index) {
  const newValue = prompt('Edit item:', items[index]);
  if (newValue !== null && newValue.trim() !== '') {
    items[index] = newValue.trim();
    renderItems();
  }
}

function deleteItem(index) {
  if (confirm('Are you sure you want to delete this item?')) {
    items.splice(index, 1);
    renderItems();
  }
}

renderItems();
