export default class ModalController {
  constructor(modal) {
    this.modal = modal;
    this.modalForm = this.modal.querySelector('.modal-form');

    this.modalNameInput = this.modalForm.querySelector('.modal-name-input');
    this.modalPhoneInput = this.modalForm.querySelector('.modal-phone-input');
    this.modalGenderInput = this.modalForm.querySelector('.modal-gender-input');
    this.modalHeightInput = this.modalForm.querySelector('.modal-height-input');
    this.modalWeightInput = this.modalForm.querySelector('.modal-weight-input');
    this.modalAgeInput = this.modalForm.querySelector('.modal-age-input');
    this.modalActivInput = this.modalForm.querySelector('.modal-activ-input');

    // this.modalTimerId = setTimeout(() => {
    //   this.showModal();
    // }, 30000);
  }

  showModal(name, phone, gender, height, weight, age, activ) {
    this.modalNameInput.value = name;
    this.modalPhoneInput.value = phone;
    this.modalGenderInput.value = gender;
    this.modalHeightInput.value = height;
    this.modalWeightInput.value = weight;
    this.modalAgeInput.value = age;
    this.modalActivInput.value = activ;

    this.modal.classList.toggle('hidden');
    document.body.style.overflow = 'hidden';
    clearTimeout(this.modalTimerId);
  }

  closeModal() {
    this.modal.classList.toggle('hidden');
    document.body.style.overflow = '';
    this.modalForm.reset();
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
  }
}
