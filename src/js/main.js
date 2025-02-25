/**
 * Main script file.
 * @module main
 */

import * as common from "../sc-common/js/common.js";
import * as helper from "../sc-common/js/helper.js";
import * as vars from "./variables.js";

document.addEventListener("DOMContentLoaded", () => {
  common.loadFigures();
  common.loadVideos();
  common.loadComponents();
  common.loadCallouts();
  common.setUpPopovers();
  common.setupReviewQuizes();
});

document.addEventListener("ComponentsLoaded", () => {
  common.setupDropdownMenu(vars.links);
  common.setupQuizCTA(vars.links);
});

export function navigate(option) {
  common.navigate(option, vars.links["main"], vars.navigation);
}

export function toggleVisibility(selector) {
  helper.toggleVisibility(selector);
}

window.showSelector = helper.showSelector;
