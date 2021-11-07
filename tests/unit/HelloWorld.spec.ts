/// <reference types="cypress" />

import { mount } from '@cypress/vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld Component', () => {
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
