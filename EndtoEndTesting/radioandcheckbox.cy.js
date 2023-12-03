describe('radioandcheckbox', () =>{
    it("radiocheckboxbuttontest", () =>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visiblity of radio button
        // cy.get("input#male").should('be.visible')
        // cy.get("input#female").should('be.visible')

        // //selecting radio button
        // cy.get("input#male").check().should('be.checked')
        // cy.get("input#female").should('not.be.checked')

        // //visiblity and select checkbox
        // cy.get("input#monday").should('be.visible')
        // cy.get("input#monday").check().should('be.checked')

        // selecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //selecting first and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")


    })
})