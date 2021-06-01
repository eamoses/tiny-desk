const modal = document.getElementById('modal');
modal.addEventListener('click', function(){
  const openModal = document.getElementById('open-modal');
  const modalText = document.getElementById('modal-text');
  const closeModal = document.getElementById('close-modal');
  openModal.style.display = 'block';
  modalText.style.display = 'block';
  closeModal.addEventListener('click', function(){
    const openModal = document.getElementById('open-modal');
    const modalText = document.getElementById('modal-text');
    openModal.style.display = 'none';
    modalText.style.display = 'none';
  });
});
