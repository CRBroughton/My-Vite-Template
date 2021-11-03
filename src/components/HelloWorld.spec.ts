// src/components/HelloWorld.spec.ts
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const wrapper = mount(HelloWorld, {
      props: { msg },
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(wrapper.find('h1').text()).equal(msg)
  })
})
