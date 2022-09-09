export default class ProjectFoodController {
  constructor(
    container,
    header,
    preview,
    offer,
    calculating,
    menu,
    promotion,
    modal,
  ) {
    this.box = container;
    this.header = header;
    this.preview = preview;
    this.offer = offer;
    this.calculating = calculating;
    this.menu = menu;
    this.promotion = promotion;
    this.modal = modal;
  }

  projectFoodControl() {
    this.preview.previewControl();
    this.offer.offerControl();
    this.calculating.calculatingControl();
    this.menu.menuControl();
    this.promotion.promotionControl();
    this.modal.modalControl();

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
