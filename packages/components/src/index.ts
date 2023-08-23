import type { Component, App } from 'vue';

import Button from './button';

const components: {
  [propName: string]: Component;
} = {
  Button
}
export const UiComponents =  components
// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c]);
    }
  },
};