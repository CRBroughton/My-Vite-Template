/// <reference types="cypress" />

import { mount } from '@cypress/vue'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '@/store/main'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders a message', () => {
    const msg = 'test message'
    mount(HelloWorld, {
      propsData: {
        msg,
      },
    })

    cy.get('h1').contains(msg)
  })
  it('increments the count', () => {
    const counter = useStore()
    mount(HelloWorld)
    expect(counter.count).to.equal(0)
    counter.increment()
    expect(counter.count).to.equal(1)
  })
})
