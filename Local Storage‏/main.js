let wisdom = JSON.parse(localStorage.getItem('wisdom')) || [];

const input = document.getElementById('wisdomInput');
const container = document.getElementById('container');

function render() {
  container.innerHTML = '';
  
  wisdom.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      ${item.text} 
      <span onclick="deleteItem(${item.id})" style="color: red; cursor: pointer; margin-left: 10px;">x</span>
    `;
    container.appendChild(div);
  });
}

function deleteItem(id) {
  wisdom = wisdom.filter(w => w.id !== id);
  localStorage.setItem('wisdom', JSON.stringify(wisdom));
  render();
}

document.getElementById('addBtn').addEventListener('click', () => {
  if (!input.value) return;

  wisdom.push({ 
    id: Date.now(), 
    text: input.value 
  });
  
  input.value = ''; 

  if (wisdom.length % 2 === 0) {
    localStorage.setItem('wisdom', JSON.stringify(wisdom));
  }

  render();
});


document.getElementById('clearBtn').addEventListener('click', () => {
  localStorage.removeItem('wisdom');
  wisdom = [];
  render();
});


render();