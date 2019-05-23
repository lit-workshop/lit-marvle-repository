import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `lit-marvel-repository`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitMarvelRepository extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lit-marvel-repository',
      },
    };
  }
}

window.customElements.define('lit-marvel-repository', LitMarvelRepository);
