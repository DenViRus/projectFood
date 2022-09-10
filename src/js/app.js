import HeaderController from './HeaderController.js';
import PreviewController from './PreviewController.js';
import OfferController from './OfferController.js';
import CalculatingController from './CalculatingController.js';
import MenuController from './MenuController.js';
import PromotionController from './PromotionController.js';
import ModalController from './ModalController.js';
import Utils from './Utils.js';
import ProjectFoodController from './ProjectFoodController.js';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const headerController = new HeaderController(header);

  const preview = document.getElementById('preview');
  const previewController = new PreviewController(preview);

  const utils = new Utils();

  const offer = document.getElementById('offer');
  const offerController = new OfferController(offer, utils);

  const calculating = document.getElementById('calculating');
  const calculatingController = new CalculatingController(calculating);

  const menu = document.getElementById('menu');
  const menuController = new MenuController(menu, utils);

  const promotion = document.getElementById('promotion');
  const promotionController = new PromotionController(promotion);

  const modal = document.getElementById('modal');
  const modalController = new ModalController(modal);

  const projectContainer = document.getElementById('projectContainer');
  const projectFoodController = new ProjectFoodController(
    projectContainer,
    headerController,
    previewController,
    offerController,
    calculatingController,
    menuController,
    promotionController,
    modalController,
  );
  projectFoodController.projectFoodControl();
});
