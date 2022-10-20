import React from 'react';
import Render from './render-special';

function renderPromise<InnerProps extends Record<string, any>>(
  InnerComponent: React.ComponentType<InnerProps>,
  name: string,
) {
  type RecordProps = Omit<InnerProps, 'onOk' | 'onClose'>;

  return function (props?: RecordProps) {
    let render: Render | null = new Render(name);

    type PromiseResolveType = Parameters<InnerProps['onOk']>[0];

    return new Promise<PromiseResolveType>((resolve, reject) => {
      const _props = (props ?? {}) as InnerProps;

      const el = (
        <InnerComponent
          {..._props}
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
