export default class HeaderController {
  constructor(header) {
    this.header = header;
    this.headerLogoBox = this.header.querySelector('.header-logo-box');
    this.headerNavBox = this.header.querySelector('.header-nav-box');
    this.headerButtonBox = this.header.querySelector('.header-button-box');
  }
}
