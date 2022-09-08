export default class ProjectFoodController {
  constructor(
    container,
    header,
    preview,
    offer,
    calculating,
    promotion,
    modal,
  ) {
    this.box = container;
    this.header = header;
    this.preview = preview;
    this.offer = offer;
    this.calculating = calculating;
    this.promotion = promotion;
    this.modal = modal;
  }

  projectFoodControl() {
    this.preview.previewControl();
    this.offer.offerControl();
    this.calculating.calculatingControl();
    this.promotion.promotionControl();
    this.modal.modalControl();

    const projectFoodListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest('[data-modal]')) {
        event.preventDefault();
        this.modal.modal.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
      }
    };
    this.box.addEventListener('click', projectFoodListener1);
  }
}
