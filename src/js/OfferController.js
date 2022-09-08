import pepper from '../img/slider/pepper.jpg';
import food from '../img/slider/food-12.jpg';
import oil from '../img/slider/olive-oil.jpg';
import paprika from '../img/slider/paprika.jpg';

export default class OfferController {
  constructor(offer) {
    this.offer = offer;

    this.offerAdvantages = this.offer.querySelector('.offer-advantages');
    this.offerHeaders = [...this.offerAdvantages.querySelectorAll('.offer-advantages-heading')];
    this.offerparagraphs = [...this.offerAdvantages.querySelectorAll('.offer-advantages-paragraph')];

    this.offerSlider = this.offer.querySelector('.offer-slider');
    this.offerSliderCounter = this.offerSlider.querySelector('.offer-slider-counter');
    this.arrowPrev = this.offerSliderCounter.querySelector('.offer-slider-arrow-prev');
    this.arrowNext = this.offerSliderCounter.querySelector('.offer-slider-arrow-next');
    this.current = this.offerSliderCounter.querySelector('.offer-slider-current');
    this.total = this.offerSliderCounter.querySelector('.offer-slider-total');

    this.offerSliderWrapper = this.offerSlider.querySelector(
      '.offer-slider-wrapper',
    );
    this.offerSliderIMG = this.offerSliderWrapper.querySelector('.offer-slide-img');

    this.offerData = [
      {
        name: 'pepper',
        index: '01',
        img: {
          src: pepper,
          alt: 'pepper',
        },
      },
      {
        name: 'food',
        img: {
          src: food,
          alt: 'food',
        },
      },
      {
        name: 'oil',
        img: {
          src: oil,
          alt: 'oil',
        },
      },
      {
        name: 'paprika',
        img: {
          src: paprika,
          alt: 'paprika',
        },
      },
    ];
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
    this.offerSliderIMG.src = this.offerData[counter - 1].img.src;
    this.offerSliderIMG.alt = this.offerData[counter - 1].img.alt;
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
