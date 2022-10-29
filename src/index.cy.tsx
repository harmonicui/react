export function Component() {
  return <div>Hello world!</div>
}

it('should work', () => {
  cy.render(<Component />)
  cy.findByText('Hello world!').should('exist')
})
