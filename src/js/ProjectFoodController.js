export default class ProjectFoodController {
  constructor(
    container,
    header,
    preview,
    offer,
    calculating,
    menu,
    order,
    promotion,
    gameButtonSection,
    modal,
    request,
  ) {
    this.box = container;
    this.header = header;
    this.preview = preview;
    this.offer = offer;
    this.calculating = calculating;
    this.menu = menu;
    this.order = order;
    this.promotion = promotion;
    this.gameButtonSection = gameButtonSection;
    this.modal = modal;
    this.request = request;

    this.userName = this.order.orderForm.querySelector('.order-name-input');
    this.userPhone = this.order.orderForm.querySelector('.order-phone-input');
    this.userGender = this.calculating.gender.querySelector('.calculating-item-active');
    this.userHeight = this.calculating.calculatingForm.querySelector('#height');
    this.userWeight = this.calculating.calculatingForm.querySelector('#weight');
    this.userAge = this.calculating.calculatingForm.querySelector('#age');
    this.userActiv = this.calculating.activ.querySelector('.calculating-item-active');
  }

  async postUserData(form) {
    const newFornData = new FormData(form);
    const newUser = await this.request.addUser(newFornData, this.request.urlContactData);
    console.log(newUser);
    this.modal.closeModal();
  }

  projectFoodControl() {
    this.preview.previewControl();
    this.offer.offerControl();
    this.calculating.calculatingControl();
    this.menu.menuControl();
    this.order.orderControl();
    this.promotion.promotionControl();
    this.gameButtonSection.gameButtonSectionControl();
    this.modal.modalControl();
    this.request.projectFoodRequestControl();

    const projectFoodListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest('[data-modal]')) {
        event.preventDefault();
        const name = this.userName.value;
        const phone = this.userPhone.value;
        const gender = this.calculating.gender.querySelector('.calculating-item-active').textContent;
        const height = this.userHeight.value;
        const weight = this.userWeight.value;
        const age = this.userAge.value;
        const activ = this.calculating.activ.querySelector('.calculating-item-active').textContent;
        this.modal.showModal(name, phone, gender, height, weight, age, activ);
      }

      if (this.target.closest('.modal-button')) {
        event.preventDefault();
        const modalForm = this.target.closest('.modal-form');
        this.postUserData(modalForm);
      }
    };
    this.box.addEventListener('click', projectFoodListener1);

    const projectFoodListener2 = (event) => {
      this.target = event.target;
      if (
        window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
      ) {
        event.preventDefault();
        const name = this.userName.value;
        const phone = this.userPhone.value;
        const gender = this.calculating.gender.querySelector('.calculating-item-active').textContent;
        const height = this.userHeight.value;
        const weight = this.userWeight.value;
        const age = this.userAge.value;
        const activ = this.calculating.activ.querySelector('.calculating-item-active').textContent;

        this.modal.showModal(name, phone, gender, height, weight, age, activ);
        window.removeEventListener('scroll', projectFoodListener2);
      }
    };
    window.addEventListener('scroll', projectFoodListener2);
  }
}
