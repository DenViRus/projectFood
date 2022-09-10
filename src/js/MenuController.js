export default class MenuController {
  constructor(menu, utils) {
    this.menu = menu;
    this.utils = utils;
    this.menuList = this.menu.querySelector('.menu-list');
    this.transfer = 60;
    this.card = null;
  }

  getMenuCard(item) {
    const newCard = document.createElement('li');
    newCard.classList.add('menu-item', `menu-item-${item.name}`);
    const cardPicture = document.createElement('div');
    cardPicture.classList.add('menu-item-picture');
    const cardIMG = document.createElement('img');
    cardIMG.classList.add('menu-item-img');
    cardIMG.setAttribute('src', item.img.src);
    cardIMG.setAttribute('alt', item.img.alt);
    const cardHeading = document.createElement('h3');
    cardHeading.classList.add('menu-item-heading');
    cardHeading.textContent = item.heading;
    const cardParagraph = document.createElement('p');
    cardParagraph.classList.add('menu-item-paragraph');
    cardParagraph.textContent = item.paragraph;
    const cardDivider = document.createElement('div');
    cardDivider.classList.add('menu-item-divider');
    const cardprice = document.createElement('div');
    cardprice.classList.add('menu-item-price');
    const cardCost = document.createElement('div');
    cardCost.classList.add('menu-item-cost');
    cardCost.textContent = 'Цена:';
    const cardTotal = document.createElement('div');
    cardTotal.classList.add('menu-item-total');
    cardTotal.textContent = ' руб/день';
    const cardSum = document.createElement('span');
    cardSum.classList.add('menu-item-sum');
    cardSum.textContent = item.price * this.transfer;
    cardTotal.prepend(cardSum);
    cardPicture.append(cardIMG);
    cardprice.append(cardCost);
    cardprice.append(cardTotal);
    newCard.append(cardPicture);
    newCard.append(cardHeading);
    newCard.append(cardParagraph);
    newCard.append(cardDivider);
    newCard.append(cardprice);
    this.card = newCard;
    return this.card;
  }

  getMenuList(arrData) {
    arrData.forEach((data) => this.menuList.append(this.getMenuCard(data)));
  }

  menuControl() {
    this.getMenuList(this.utils.menuData);

    const menuListener1 = (event) => {
      this.target = event.target;

      // if (this.target.closest('.modal-close')) {
      //   event.preventDefault();
      //   this.closeModal();
      // }
    };
    this.menu.addEventListener('click', menuListener1);
  }
}
