// Create overlay and modal dynamically if not already in HTML
const overlay = document.createElement('div');
overlay.className = 'modal-overlay';
document.body.appendChild(overlay);

const modal = document.createElement('div');
modal.className = 'modal-box';
modal.innerHTML = `
  <div class="modal-header">
    <h2 class="modal-title">Help</h2>
    <span class="modal-close">&times;</span>
  </div>
  <div class="modal-content" id="modalContent">Placeholder text.</div>
`;
document.body.appendChild(modal);

const modalContent = modal.querySelector('#modalContent');
const closeBtn = modal.querySelector('.modal-close');

// Attach to all help cards
document.querySelectorAll('.example-cards .card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.card-title')?.textContent || 'Help Topic';
    const desc = card.querySelector('.card-description')?.textContent || '';
    modal.querySelector('.modal-title').textContent = title;
    modalContent.textContent = desc;

    overlay.classList.add('show');
    modal.classList.add('show');
  });
});

// Close functions
const closeModal = () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
