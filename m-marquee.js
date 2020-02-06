class MMarquee extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('div');
    const text = document.createElement('span');

    wrapper.classList.add('wrapper');
    text.classList.add('text');

    text.innerHTML = this.innerHTML;

    const duration = text.innerText.length * .2;

    const styles = document.createElement('style');
    styles.textContent = `
      .wrapper {
        display: inline-block;
        overflow: hidden;
      }

      .text {
        animation: marquee ${duration}s linear;
        animation-iteration-count: infinite;
        position: relative;
        white-space: nowrap;
      }

      @keyframes marquee {
        from {
          left: 100%;
        }

        to {
          left: -100%;
        }
      }

    `;

    wrapper.classList.add('wrapper');
    wrapper.appendChild(text);
    shadow.appendChild(styles);
    shadow.appendChild(wrapper);
  }
}

customElements.define('m-marquee', MMarquee);
