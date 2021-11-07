/// <reference types="cypress" />

import { mount } from '@cypress/vue'
import { setActivePinia, createPinia } from 'pinia'
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
})
