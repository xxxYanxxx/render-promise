import React from 'react';
import Render from './render-special';

function renderPromise<InnerProps extends Record<string, any>>(
  InnerComponent: React.ComponentType<InnerProps>,
  name: string,
) {
  return function (record?: InnerProps) {
    let render: Render | null = new Render(name);

    type PromiseResolveType = Parameters<InnerProps['onOk']>[0];

    return new Promise<PromiseResolveType>((resolve, reject) => {
      const props = (record ?? {}) as InnerProps;
      const el = (
        <InnerComponent
          {...props}
          onOk={(res: any) => {
            render!.unmountComponentAtNode();
            render = null;
            resolve(res);
          }}
          onClose={(err: any) => {
            render!.unmountComponentAtNode();
            render = null;
            reject(err);
          }}
        />
      );
      render!.render(el);
    });
  };
}

export default renderPromise;
