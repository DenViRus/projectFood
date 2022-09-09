export default class MenuController {
  constructor(menu) {
    this.menu = menu;
    this.menuList = this.menu.querySelector('.menu-list');
  }

  menuControl() {
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
