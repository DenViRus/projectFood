export default class HeaderController {
  constructor(header) {
    this.header = header;
    this.headerLogoBox = this.header.querySelector('.header-logo-box');
    this.headerNavBox = this.header.querySelector('.header-nav-box');
    this.headerButtonBox = this.header.querySelector('.header-button-box');
  }

  logoIMGAnimate(img) {
    img.classList.add('absolute');
    let pos = 0;
    function frame() {
      if (pos === 500) {
        clearInterval(id);
        img.classList.remove('absolute');
      } else {
        pos++;
        img.style.left = `${pos}px`;
      }
    }
    const id = setInterval(frame, 10);
  }

  headerControl() {
    const headerListener1 = (event) => {
      this.target = event.target;
      if (this.target.closest('.header-logo-image')) {
        event.preventDefault();
        this.logoIMGAnimate(this.target);
      }
    };
    this.header.addEventListener('click', headerListener1);
  }
}
