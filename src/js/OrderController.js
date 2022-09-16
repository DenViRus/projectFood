export default class OrderController {
  constructor(order) {
    this.order = order;
    this.orderForm = this.order.querySelector('.order-form');
  }

  orderControl() {
    const orderListener1 = (event) => {
      this.target = event.target;

      // if (this.target.closest('.offer-slider-arrow')) {
      //   event.preventDefault();
      //   this.changeOfferSliderCounter(this.target);
      // }
    };
    this.order.addEventListener('click', orderListener1);
  }
}
