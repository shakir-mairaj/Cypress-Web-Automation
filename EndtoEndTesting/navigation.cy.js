describe("Navigation",()=>{

    it("NavigationCommands",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')

        cy.get("#narbar-menu>ul>li:nth-child(5)").click()
        cy.get("div[id='content'] h2").should('have.text','Software')

        cy.go("back")  //go back to previous page

        cy.go("forward") // go forward to page

        cy.go(-1)  //go back to previous page
        cy.go(1)  // go forward to page

        cy.reload()  //reload the page

    })
})