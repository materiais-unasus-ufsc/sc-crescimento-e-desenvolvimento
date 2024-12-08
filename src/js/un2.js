/**
 * Functions specific to un2.
 * @module un2
 */

export function setupFigureReflexosPrimitivos() {
  document.addEventListener("SVGsLoaded", function () {
    console.log("Setting up figure 'reflexos-primitivos'...");

    const parser = new DOMParser();
    const modal = document.getElementById("figure-2-modal");
    const modalBody = modal.querySelector(".modal-body");

    const buttons = document.querySelector(
      'figure[id="reflexos-primitivos"] g[id="buttons"]'
    );
    for (let i = 0; i < buttons.children.length; i++) {
      const button = buttons.children[i];
      button.style.cursor = "pointer";

      const buttonRect = button.querySelector("rect");
      buttonRect.style.transition = "all 0.1s ease-in-out";
      const rectOriginalFill = buttonRect.getAttribute("fill");

      button.addEventListener("mouseover", function () {
        buttonRect.setAttribute("fill", rectOriginalFill + "7d");
      });
      button.addEventListener("mouseout", function () {
        buttonRect.setAttribute("fill", rectOriginalFill);
      });

      // Modal opening setup
      button.setAttribute("type", "button");
      button.setAttribute("data-bs-toggle", "modal");
      button.setAttribute("data-bs-target", "#figure-2-modal");

      const name = button.id.substring(button.id.indexOf("-") + 1).trim();
      button.setAttribute("data-bs-name", name);
      console.debug(`Option name: ${name}`);

      // SVG insertion into the modal body.
      fetch(`img/un2/reflexos-primitivos/${name}.svg`)
        .then((response) => response.text())
        .then((svgText) => {
          const svgElement = parser
            .parseFromString(svgText, "text/html")
            .querySelector("svg");

          svgElement.id = name;
          svgElement.style.display = "none";

          // Close button setup.
          const closeButton = svgElement.querySelector("g[id='button-close'");
          closeButton.setAttribute("type", "button");
          closeButton.setAttribute("data-bs-dismiss", "modal");
          closeButton.setAttribute("aria-label", "Close");
          closeButton.style.cursor = "pointer";
          const closeButtonCircle = closeButton.querySelector("circle");
          const circleOriginalFill = closeButtonCircle.getAttribute("fill");
          closeButton.addEventListener("mouseover", function () {
            closeButtonCircle.setAttribute("fill", circleOriginalFill + "7d");
          });
          closeButton.addEventListener("mouseout", function () {
            closeButtonCircle.setAttribute("fill", circleOriginalFill);
          });

          modalBody.appendChild(svgElement);
        });
    }

    modal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const svg = modalBody.querySelector(
        `svg[id="${button.getAttribute("data-bs-name")}"`
      );
      svg.style.display = "block";
    });

    modal.addEventListener("hide.bs.modal", (_) => {
      for (let i = 0; i < modalBody.childElementCount; i++) {
        const svg = modalBody.children[i];
        svg.style.display = "none";
      }
    });
    console.log("Figure 'reflexos-primitivos' all set");
  });
}
