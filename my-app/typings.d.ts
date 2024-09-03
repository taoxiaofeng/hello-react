// 不检查cssmodule的定义,当然也可以引用webpack插件来检查它
declare module "*.css" 
declare module "*.less"
declare module "*.sass" 
declare module "*.module.less"
declare module "*.module.sass" 

declare module "*.svg" {
  const content: string;
  export default content;
}
