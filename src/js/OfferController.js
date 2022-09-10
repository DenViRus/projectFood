export default class OfferController {
  constructor(offer, utils) {
    this.offer = offer;
    this.utils = utils;
    this.offerAdvantages = this.offer.querySelector('.offer-advantages');
    this.offerHeaders = [
      ...this.offerAdvantages.querySelectorAll('.offer-advantages-heading'),
    ];
    this.offerparagraphs = [
      ...this.offerAdvantages.querySelectorAll('.offer-advantages-paragraph'),
    ];
    this.offerSlider = this.offer.querySelector('.offer-slider');
    this.offerSliderCounter = this.offerSlider.querySelector(
      '.offer-slider-counter',
    );
    this.current = this.offerSliderCounter.querySelector(
      '.offer-slider-current',
    );
    this.offerSliderWrapper = this.offerSlider.querySelector(
      '.offer-slider-wrapper',
    );
    this.offerSliderIMG = this.offerSliderWrapper.querySelector('.offer-slide-img');
  }

  changeOfferSliderCounter(arrow) {
    let counter = null;
    if (arrow.classList.contains('offer-slider-arrow-prev')) {
      counter = parseInt(this.current.textContent, 10) - 1;
    } else if (arrow.classList.contains('offer-slider-arrow-next')) {
      counter = parseInt(this.current.textContent, 10) + 1;
    }
    if (counter < 1) {
      counter = 4;
    } else if (counter > 4) {
      counter = 1;
    }
    this.offerSliderIMG.src = this.utils.offerData[counter - 1].img.src;
    this.offerSliderIMG.alt = this.utils.offerData[counter - 1].img.alt;
    this.current.textContent = `0${counter}`;
  }

  offerControl() {
    const offerListener1 = (event) => {
      this.target = event.target;
      if (this.target.closest('.offer-slider-arrow')) {
        event.preventDefault();
        this.changeOfferSliderCounter(this.target);
      }
    };
    this.offer.addEventListener('click', offerListener1);
  }
}
