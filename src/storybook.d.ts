declare module '@storybook/html-vite' {
  export interface Meta<T = any> {
    title?: string;
    component?: any;
    tags?: string[];
    render?: (args: T) => HTMLElement | DocumentFragment;
    argTypes?: Record<string, any>;
    args?: Partial<T>;
    parameters?: Record<string, any>;
  }

  export interface StoryObj<T = any> {
    args?: Partial<T>;
    render?: (args: T) => HTMLElement | DocumentFragment;
    parameters?: Record<string, any>;
  }
}
