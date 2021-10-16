export default class Slide {
  constructor(slide, wrapper) {
      this.slide = document.querySelector(slide)
      this.wrapper = document.querySelector(wrapper);
  }

  onStart(_event) {
    _event.preventDefault();
    this.wrapper.addEventListener('mousedown', this.onMove)
  }

  onMove(_event) {
  }

  onEnd(_event) {
    this.wrapper.removeEventListener('mousemove', this.onMove)
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onEnd)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents()
    this.addSlideEvents();
    return this;
  }
}