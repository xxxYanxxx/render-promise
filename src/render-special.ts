import ReactDom from 'react-dom';

export interface Options {
  beforeCreate: () => void;
  created: () => void;
}
class Render {
  private name: string;
  private div: HTMLDivElement | null;
  private hidden: boolean;
  private options?: Options;

  constructor(name: string, options?: Options) {
    this.name = name;
    this.div = null;
    this.hidden = false;

    this.options = options;
  }

  create() {
    if (this.options?.beforeCreate) this.options?.beforeCreate();

    this.div = document.createElement('div');
    this.div.setAttribute('tool-element', this.name);

    document.body.appendChild(this.div);

    if (this.hidden) this.div.style.display = 'none';
    else this.div.style.display = '';

    if (this.options?.created) this.options?.created();
  }

  remove() {
    if (!this.div) return;
    document.body.removeChild(this.div);
    this.div = null;
  }

  show() {
    if (!this.div) return;
    this.hidden = false;
    this.div.style.display = '';
  }

  hide() {
    if (!this.div) return;
    this.hidden = true;
    this.div.style.display = 'none';
  }

  render(element: JSX.Element) {
    if (!this.div) this.create();
    ReactDom.render(element, this.div);
  }

  unmountComponentAtNode() {
    ReactDom.unmountComponentAtNode(this.div!);
    this.remove();
  }
}

export default Render;

