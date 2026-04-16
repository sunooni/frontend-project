document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.querySelector('.come-to-sedona-section .button-size-l');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContainer = document.querySelector('.modal-container');
  const closeButton = document.querySelector('.close-button');

  function openModal() {
    if (modalOverlay && modalContainer) {
      modalOverlay.style.display = 'block';
      modalContainer.style.display = 'block';
    }
  }

  function closeModal() {
    if (modalOverlay && modalContainer) {
      modalOverlay.style.display = 'none';
      modalContainer.style.display = 'none';
    }
  }

  if (searchButton) {
    searchButton.addEventListener('click', openModal);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
});
