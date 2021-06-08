/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from './element';
import { current } from './hooks';
import { setCurrentRegion } from '../components/App';
import { regions } from '../data/openTripMapAPI';
/**
 * Renders a component and attaches it to the target DOM element
 * @param Component - function
 * @param target - DOM element to attach component to
 */
let timer;

export function render(Component, target) {
  function workLoop() {
    if (current.shouldReRender) {
      current.shouldReRender = false;
      target.replaceChildren(<Component />);
    }
    //
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.focus();
      searchInput.selectionStart = searchInput.value.length;
    }
    //
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(workLoop);
  }
  timer = requestAnimationFrame(workLoop);
}

export default render;
