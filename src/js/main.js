/**
 * Main script file.
 * @module main
 */

import * as common from "../sc-common/js/common.js";
import * as helper from "../sc-common/js/helper.js";

const mainURL = "https://unasus-cp.moodle.ufsc.br/course/view.php?id=542";
const un1qaURL = "https://unasus-cp.moodle.ufsc.br/mod/quiz/view.php?id=9059";
const pages = [
  "sobre.html",
  "un1.html",
  un1qaURL,
  "un2.html",
  "un3.html",
  "un4.html",
];

document.addEventListener("DOMContentLoaded", () => {
  common.loadFigures();
  common.loadVideos();
  common.loadComponents();
  common.loadCallouts();
  common.setUpPopovers();

  document.addEventListener;
});

export function navigate(option) {
  common.navigate(option, mainURL, pages);
}

window.showSelector = helper.showSelector;
