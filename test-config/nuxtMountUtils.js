/* eslint-disable import/no-extraneous-dependencies */
import { mount, shallowMount } from '@vue/test-utils';

export async function mountWithFetch(
  component,
  {
    mountFunction, fetchGlobal, fetchMocks, fetchContext, ...options
  } = {},
) {
  let mountFunc = mountFunction;
  if (!mountFunc) {
    mountFunc = mount;
  }
  const wrapper = mountFunc(component, options);
  const fetch = wrapper.vm.$options.fetch;
  if (typeof fetch !== 'function') {
    throw new TypeError('fetch should be a function');
  }
  const thisArg = { ...wrapper.vm.$data, ...fetchMocks };
  const originalGlobal = {};
  const fetchKeys = Object.keys(fetchGlobal);
  fetchKeys.forEach((key) => {
    originalGlobal[key] = global[key];
    global[key] = fetchGlobal[key];
  });
  await fetch.apply(thisArg, [fetchContext]);
  fetchKeys.forEach((key) => {
    global[key] = originalGlobal[key];
  });
  delete thisArg.$config;
  wrapper.setData(thisArg);
  return wrapper;
}
export async function shallowMountWithFetch(component, options) {
  const opt = options;
  opt.mountFunction = shallowMount;
  const fetchedMount = await mountWithFetch(component, opt);
  return fetchedMount;
}
