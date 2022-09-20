import pepper from '../img/slider/pepper.jpg';
import food from '../img/slider/food-12.jpg';
import oil from '../img/slider/olive-oil.jpg';
import paprika from '../img/slider/paprika.jpg';

import fitness from '../img/tabs/vegy.jpg';
import elite from '../img/tabs/elite.jpg';
import post from '../img/tabs/post.jpg';

export default class Utils {
  constructor() {
    this.menuData = [
      {
        name: 'fitness',
        img: {
          src: fitness,
          alt: 'fitness',
        },
        heading: 'Меню "Фитнес"',
        paragraph:
          'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        price: 20,
      },
      {
        name: 'elite',
        img: {
          src: elite,
          alt: 'elite',
        },
        heading: 'Меню “Премиум”',
        paragraph:
          'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        price: 25,
      },
      {
        name: 'post',
        img: {
          src: post,
          alt: 'post',
        },
        heading: 'Меню "Постное"',
        paragraph:
          'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        price: 17,
      },
    ];

    this.offerData = [
      {
        name: 'pepper',
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

    this.messages = {
      loading: 'Loading...',
      success: 'Success!',
      error: 'Error!',
    };
  }
}
