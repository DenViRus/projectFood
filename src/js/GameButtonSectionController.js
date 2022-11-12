export default class GameButtonSectionController {
  constructor(gameButtonSection) {
    this.gameButtonSection = gameButtonSection;
    this.gameSectionButton = this.gameButtonSection.querySelector('.game-section-button');
  }

  gameButtonSectionControl() {
    const gameButtonSectionListener1 = (event) => {
      this.target = event.target;
      if (this.target.closest('.game-section-button')) {
        event.preventDefault();
        console.log(this.target);
      }
    };
    this.gameButtonSection.addEventListener('click', gameButtonSectionListener1);
  }
}
