import { registerApplication, start } from 'single-spa';
import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';

import { planSlice, store } from './store';

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(application => registerApplication({
  ...application,
  customProps: {
    store,
    slices: {
      planSlice
    }
  }
}));
layoutEngine.activate();
start();
