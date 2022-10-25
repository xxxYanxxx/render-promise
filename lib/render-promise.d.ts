import React from 'react';
import { Options } from './render-special';
declare function renderPromise<InnerProps extends Record<string, any>>(InnerComponent: React.ComponentType<InnerProps>, name: string, options?: Options): (props?: Omit<InnerProps, "onClose" | "onOk"> | undefined) => Promise<Parameters<InnerProps["onOk"]>[0]>;
export default renderPromise;
