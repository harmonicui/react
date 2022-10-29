import { mount } from 'cypress/react18'
import '@testing-library/cypress/add-commands'
import '@cypress/code-coverage/support'
import '@dom-assertions/cypress-dom'

declare global {
  namespace Cypress {
    interface Chainable {
      render: typeof mount
    }
  }
}

Cypress.Commands.add('render', mount)
