/*
 * This was taken from https://github.com/xtermjs/xterm.js/blob/master/src/addons/fit/fit.ts
 * Fit terminal columns and rows to the dimensions of its DOM element.
 *
 * Approach:
 *
 *   - Rows: Truncate the division of the terminal parent element height by the terminal row height.
 *
 *   - Columns: Truncate the division of the terminal parent element width by the terminal character
 *   width (apply display: inline at the terminal row and truncate its width with the current
 *   number of columns).
 */
function proposeGeometry({ element, _core }) {
  if (!element.parentElement) {
    return null;
  }
  const parentElementStyle = window.getComputedStyle(element.parentElement);
  const parentElementHeight = parseInt(
    parentElementStyle.getPropertyValue("height")
  );
  const parentElementWidth = Math.max(
    0,
    parseInt(parentElementStyle.getPropertyValue("width"))
  );
  const elementStyle = window.getComputedStyle(element);
  const elementPadding = {
    top: parseInt(elementStyle.getPropertyValue("padding-top")),
    bottom: parseInt(elementStyle.getPropertyValue("padding-bottom")),
    right: parseInt(elementStyle.getPropertyValue("padding-right")),
    left: parseInt(elementStyle.getPropertyValue("padding-left"))
  };
  const elementPaddingVer = elementPadding.top + elementPadding.bottom;
  const elementPaddingHor = elementPadding.right + elementPadding.left;
  const availableHeight = parentElementHeight - elementPaddingVer;
  const availableWidth =
    parentElementWidth - elementPaddingHor - _core.viewport.scrollBarWidth;
  const geometry = {
    cols: Math.floor(
      availableWidth / _core.renderer.dimensions.actualCellWidth
    ),
    rows: Math.floor(
      availableHeight / _core.renderer.dimensions.actualCellHeight
    )
  };
  return geometry;
}

function fit(term) {
  const geometry = proposeGeometry(term);
  if (geometry) {
    // Force a full render
    if (term.rows !== geometry.rows || term.cols !== geometry.cols) {
      term._core.renderer.clear();
      term.resize(geometry.cols, geometry.rows);
    }
  }
}

// Open a new terminal in the #terminal div
const term = new Terminal({});
const container = document.querySelector("#terminal");
// Auto-focus argument set to true
term.open(container, true);

// Fit the terminal to the current window size
fit(term);
// Fit the terminal geometry on every window resize
addEventListener("resize", () => fit(term));

// Relay key events to faux's console
term.on("key", key => faux.console.handle(key));
term.on("paste", str => Array.from(str).map(char => faux.console.handle(char)));
// Allow the faux console to write to this terminal
faux.console.writeRaw = str => term.write(str);
