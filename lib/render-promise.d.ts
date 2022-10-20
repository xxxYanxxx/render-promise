import React from 'react';
declare function renderPromise<InnerProps extends Record<string, any>>(
  InnerComponent: React.ComponentType<InnerProps>,
  name: string,
): (
  props?: Omit<InnerProps, 'onClose' | 'onOk'> | undefined,
) => Promise<Parameters<InnerProps['onOk']>[0]>;
export default renderPromise;
