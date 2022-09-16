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
    this.modal = modal;
    this.request = request;

    this.formsArr = [this.calculating.calculatingForm, this.order.orderForm];
  }

  projectFoodControl() {
    this.preview.previewControl();
    this.offer.offerControl();
    this.calculating.calculatingControl();
    this.menu.menuControl();
    this.order.orderControl();
    this.promotion.promotionControl();
    this.modal.modalControl();
    this.request.projectFoodRequestControl();

    const projectFoodListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest('[data-modal]')) {
        event.preventDefault();
        this.modal.showModal();
      }
    };
    this.box.addEventListener('click', projectFoodListener1);
  }
}
