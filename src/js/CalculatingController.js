export default class CalculatingController {
  constructor(calculating) {
    this.calculating = calculating;
    this.calculatingField = this.calculating.querySelector('.calculating-field');
    this.genderBox = this.calculatingField.querySelector(
      '.calculating-gender-box',
    );
    this.paramsBox = this.calculatingField.querySelector(
      '.calculating-params-box',
    );
    this.activBox = this.calculatingField.querySelector(
      '.calculating-activ-box',
    );
    this.totalBox = this.calculatingField.querySelector(
      '.calculating-total-box',
    );
    this.gender = this.genderBox.querySelector(
      '.calculating-gender-box-content',
    );
    this.params = this.paramsBox.querySelector(
      '.calculating-params-box-content',
    );
    this.activ = this.activBox.querySelector('.calculating-activ-box-content');
    this.total = this.totalBox.querySelector('.calculating-total-box-content');

    this.calculatingForm = this.params.querySelector(
      '.calculating-form',
    );
  }

  changeCalculatingItem(item, itemsArr = [...item.closest('.calculating-box-content').querySelectorAll('.calculating-item')]) {
    this.item = item;
    itemsArr.forEach((el) => {
      el.classList.remove('calculating-item-active');
    });
    this.item.classList.add('calculating-item-active');
  }

  calculatingControl() {
    const calculatingListener1 = (event) => {
      this.target = event.target;

      if (this.target.closest('.calculating-item')) {
        event.preventDefault();
        if (this.target.classList.contains('calculating-item-active')) {
          return;
        }
        this.changeCalculatingItem(this.target);
      }
    };
    this.calculating.addEventListener('click', calculatingListener1);
  }
}
