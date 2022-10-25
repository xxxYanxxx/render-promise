/// <reference types="react" />
export interface Options {
    beforeCreate: () => void;
    created: () => void;
}
declare class Render {
    private name;
    private div;
    private hidden;
    private options?;
    constructor(name: string, options?: Options);
    create(): void;
    remove(): void;
    show(): void;
    hide(): void;
    render(element: JSX.Element): void;
    unmountComponentAtNode(): void;
}
export default Render;
