
const addModal = document.getElementById('add');
const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', () => {
  addModal.style.display = 'block';
});

window.addEventListener('click', (e) => {
  if (e.target == addModal) {
    addModal.style.display = 'none';
  }
});

