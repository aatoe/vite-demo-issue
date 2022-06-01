declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  ENVIRONMENT_YUNKE: {
    [index: string]: string;
  };
}
/* eslint-disable */
declare namespace UTILS {
  type NoneMethodsKeys<T> = ({ [P in keyof T]: T[P] extends Function ? never : P } & { [x: string]: never })[keyof T];
  type removeMethodsInClass<T> = Pick<T, NoneMethodsKeys<T>>;
}
