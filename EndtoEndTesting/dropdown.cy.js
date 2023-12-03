describe('dropdowntest', () =>{
    it.skip("selectdropdowntest", () =>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#country").select('France')
        .should('have.value','France')
    })
})

    it.skip("Dropdownwithoutselect", () =>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Iceland').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Iceland')
    })

    it.skip("Auto Suggest Dropdown", () =>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-title").contains("Delhi Metro").click()
        cy.get(".mw-page-title-main").should('have.text','Delhi Metro')
    })

    it("Dynamic Dropdown", () =>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type("cypress automation")

        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
            if($el.text()=='cypress automation testing')
            {
                cy.wrap($el).click()
            }

        })

    })