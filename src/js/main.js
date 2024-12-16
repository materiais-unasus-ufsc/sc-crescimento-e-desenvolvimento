/**
 * Main script file.
 * @module main
 */

import * as common from "../sc-common/js/common.js";
import * as helper from "../sc-common/js/helper.js";

document.addEventListener("DOMContentLoaded", () => {
  common.loadFigures();
  common.loadVideos();
  common.loadComponents();
  common.loadCallouts();
  common.setUpPopovers();

  document.addEventListener;
});

export const navigate = common.navigate;
window.showSelector = helper.showSelector;
