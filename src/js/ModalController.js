export default class ModalController {
  constructor(modal) {
    this.modal = modal;

    this.modalTimerId = setTimeout(() => {
      this.showModal();
    }, 30000);
  }

  showModal() {
    this.modal.classList.toggle('hidden');
    document.body.style.overflow = 'hidden';
    clearTimeout(this.modalTimerId);
  }

  closeModal() {
    this.modal.classList.toggle('hidden');
    document.body.style.overflow = '';
  }

  modalControl() {
    const modalListener1 = (event) => {
      this.target = event.target;

      if (
        this.target.closest('.modal-close') || this.target.classList.contains('modal')
      ) {
        event.preventDefault();
        this.closeModal();
      }
    };
    this.modal.addEventListener('click', modalListener1);

    const modalListener2 = (event) => {
      this.target = event.target;

      if (!this.modal.classList.contains('hidden') && event.code === 'Escape') {
        event.preventDefault();
        this.closeModal();
      }
    };
    document.addEventListener('keydown', modalListener2);

    const modalListener3 = (event) => {
      this.target = event.target;

      if (
        window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
      ) {
        event.preventDefault();
        this.showModal();
        window.removeEventListener('scroll', modalListener3);
      }
    };
    window.addEventListener('scroll', modalListener3);
  }
}
