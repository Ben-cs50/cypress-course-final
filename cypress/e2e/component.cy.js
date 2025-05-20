describe('Component testing', () => {
    it('Component works correctly', () => {
        cy.visit('http://localhost:3000/')
         cy.get('[data-test="nav-component"]').should('contain.text', 'Component')


    })
    it('Component testing found', () => {
          cy.visit('/component')
          cy.get('[data-test="component-form"]').should('contain.text', 'Component Testing')

      })

})




