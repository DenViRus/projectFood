import vegy from '../img/tabs/vegy.jpg';
import elite from '../img/tabs/elite.jpg';
import post from '../img/tabs/post.jpg';

export default class PreviewController {
  constructor(preview) {
    this.preview = preview;
    this.nameList = this.preview.querySelector('.tabheader-list');
    this.namesArr = [...this.nameList.querySelectorAll('.tabheader-item')];
    this.content = this.preview.querySelector('.tabcontent');
    this.contentIMG = this.content.querySelector('.tabcontent-img');
    this.contentDescr = this.content.querySelector('.tabcontent-descr');

    this.prevData = [
      {
        name: 'Фитнес',
        img: {
          src: vegy,
          alt: 'vegy',
        },
        descr:
          'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      },
      {
        name: 'Премиум',
        img: {
          src: elite,
          alt: 'elite',
        },
        descr:
          'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      },
      {
        name: 'Постное',
        img: {
          src: post,
          alt: 'post',
        },
        descr:
          'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет ОK!',
      },
      {
        name: 'Сбалансированное',
        img: {
          src: vegy,
          alt: 'vegy',
        },
        descr:
          'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.',
      },
    ];
  }

  findPreviewDataIndex(previewName) {
    if (
      this.prevData.find(
        ({ name }) => name.toLowerCase() === previewName.toLowerCase(),
      )
    ) {
      return this.prevData.findIndex(
        ({ name }) => name.toLowerCase() === previewName.toLowerCase(),
      );
    }
    return false;
  }

  changePreviewData(item, name) {
    const previewDataIndex = this.findPreviewDataIndex(name);

    this.contentIMG.src = this.prevData[previewDataIndex].img.src;
    this.contentIMG.alt = this.prevData[previewDataIndex].img.alt;
    this.contentDescr.textContent = this.prevData[previewDataIndex].descr;
    this.namesArr.forEach((el) => {
      el.classList.remove('tabheader-item-active');
    });
    this.content.classList.add('fade');
    item.classList.add('tabheader-item-active');
    setTimeout(() => {
      this.content.classList.remove('fade');
    }, 1000);
  }

  previewControl() {
    const previewListener1 = (event) => {
      this.target = event.target;
      if (this.target.closest('.tabheader-item')) {
        event.preventDefault();
        if (this.target.classList.contains('tabheader-item-active')) {
          return;
        }
        const name = this.target.textContent;
        this.changePreviewData(this.target, name);
      }
    };
    this.preview.addEventListener('click', previewListener1);
  }
}
