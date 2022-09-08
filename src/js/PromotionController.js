export default class PromotionController {
  constructor(promotion) {
    this.promotion = promotion;
    this.promotionText = this.promotion.querySelector('.promotion-text');

    this.promotionTimer = this.promotion.querySelector('.promotion-timer');
    this.promotionTimerContent = this.promotionTimer.querySelector('.promotion-timer-content');
    this.promotionDays = this.promotionTimerContent.querySelector('.promotion-days');
    this.promotionHours = this.promotionTimerContent.querySelector('.promotion-hours');
    this.promotionMinutes = this.promotionTimerContent.querySelector('.promotion-minutes');
    this.promotionSeconds = this.promotionTimerContent.querySelector('.promotion-seconds');

    this.deadline = '2022-09-11';
  }

  getTimeRemaining(time = Date.parse(this.deadline) - Date.parse(new Date())) {
    return {
      total: time,
      dais: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor(((time / (1000 * 60 * 60)) % 24)),
      minutes: Math.floor(((time / (1000 * 60)) % 60)),
      seconds: Math.floor((time / 1000) % 60),
    };
  }

  showTimer(timerData = this.getTimeRemaining()) {
    const currentTimerData = timerData;
    for (const data in currentTimerData) {
      if (Object.hasOwnProperty.call(currentTimerData, data)) {
        const prop = timerData[data];
        currentTimerData[data] = (prop < 10) ? `0${prop}` : prop;
      }
    }
    this.promotionDays.textContent = timerData.dais;
    this.promotionHours.textContent = timerData.hours;
    this.promotionMinutes.textContent = timerData.minutes;
    this.promotionSeconds.textContent = timerData.seconds;
  }

  getTimeInterval() {
    const timerInterval = setInterval(() => {
      const t = this.getTimeRemaining();
      this.showTimer();
      if (t.total <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  promotionControl() {
    this.showTimer();
    this.getTimeInterval();
  }
}
