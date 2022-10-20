// // namespace RenderPromise {}

// declare namespace renderPromise {
//   class Render {
//     private name: string;
//     private div: HTMLDivElement | null;
//     private hidden: boolean;

//     constructor(name: string);
//     create();
//     remove();
//     show();
//     hide();
//     render(element: JSX.Element);
//     unmountComponentAtNode();
//   }
// }

// type returnFunction<InnerProps extends Record<string, any>> = (
//   props?: Omit<InnerProps, 'onOk' | 'onClose'>,
// ) => Promise<Parameters<InnerProps['onOk']>[0]>;

// declare function renderPromise<InnerProps extends Record<string, any>>(
//   InnerComponent: React.ComponentType<InnerProps>,
//   name: string,
// ): returnFunction<InnerProps>;

// export = renderPromise;
import renderPromise from './lib/render-promise.js';

export { default as Render } from './lib/render-special';
export default renderPromise;
