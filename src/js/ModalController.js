export default class ModalController {
  constructor(modal) {
    this.modal = modal;
  }

  modalControl() {
    const modalListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest('.modal-close')) {
        event.preventDefault();
        this.modal.classList.toggle('hidden');
        document.body.style.overflow = '';
      }
    };
    this.modal.addEventListener('click', modalListener1);
  }
}
