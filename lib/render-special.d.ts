/// <reference types="react" />
declare class Render {
    private name;
    private div;
    private hidden;
    constructor(name: string);
    create(): void;
    remove(): void;
    show(): void;
    hide(): void;
    render(element: JSX.Element): void;
    unmountComponentAtNode(): void;
}
export default Render;
