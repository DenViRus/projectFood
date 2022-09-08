import HeaderController from './HeaderController.js';
import PreviewController from './PreviewController.js';
import OfferController from './OfferController.js';
import CalculatingController from './CalculatingController.js';
import PromotionController from './PromotionController.js';
import ModalController from './ModalController.js';
import ProjectFoodController from './ProjectFoodController.js';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const headerController = new HeaderController(header);

  const preview = document.getElementById('preview');
  const previewController = new PreviewController(preview);

  const offer = document.getElementById('offer');
  const offerController = new OfferController(offer);

  const calculating = document.getElementById('calculating');
  const calculatingController = new CalculatingController(calculating);

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
    promotionController,
    modalController,
  );
  projectFoodController.projectFoodControl();
});
