describe('My First Test', () => {
    it('test1', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq','OrangeHRM')
      
    })
  })
