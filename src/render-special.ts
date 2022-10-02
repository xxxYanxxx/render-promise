import ReactDom from 'react-dom';

class Render {
  private name: string;
  private div: HTMLDivElement | null;
  private hidden: boolean;

  constructor(name: string) {
    this.name = name;
    this.div = null;
    this.hidden = false;
  }

  create() {
    this.div = document.createElement('div');
    this.div.setAttribute('tool-element', this.name);

    document.body.appendChild(this.div);

    if (this.hidden) this.div.style.display = 'none';
    else this.div.style.display = '';
  }

  remove() {
    document.body.removeChild(this.div!);
    this.div = null;
  }

  show() {
    this.hidden = false;
    if (this.div) this.div.style.display = '';
  }

  hide() {
    this.hidden = true;
    if (this.div) this.div.style.display = 'none';
  }

  render(element: JSX.Element) {
    if (!this.div) this.create();
    ReactDom.render(element, this.div);
  }

  unmountComponentAtNode(){
    ReactDom.unmountComponentAtNode(this.div!)
    this.remove();
  }

}

export default Render;
