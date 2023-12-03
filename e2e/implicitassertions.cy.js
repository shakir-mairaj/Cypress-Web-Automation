describe("Implicitassertions", () =>{
    it('IA',() =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include', 'orangehrmlive.com') //url should include
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //url should be equal to
        .and('contain','orangehrm') //url should contain

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get("img[alt='company-branding']").should('be.visible') //logo should be visible
        .and('exist')

        cy.xpath('//a').should('have.length','5') //links length should be 5

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='username']").should('have.value','Admin') //username should be admin

    })
})