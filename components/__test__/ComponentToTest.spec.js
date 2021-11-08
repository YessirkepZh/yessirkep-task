/* eslint-disable no-undef */
import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import ComponentToTest from '@/components/ComponentToTest.vue';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('ComponentToTest.vue', () => {
  const vuetify = new Vuetify();
  const wrapper = mount(ComponentToTest, {
    localVue,
    vuetify,
  });

  const btn = wrapper.find('.btn');
  test('button text', () => {
    expect(btn.text()).toBe('text before test');
  });
  test('button click and text change', async () => {
    await btn.trigger('click');
    expect(btn.text()).toBe('is tested');
  });
});
