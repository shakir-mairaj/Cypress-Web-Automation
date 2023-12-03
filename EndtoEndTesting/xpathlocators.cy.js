describe('xPath Locators', () =>{

    it("findnumberofproducts", () =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click()
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)

    })

    it("findnumberofproductschained", () =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click()
        cy.xpath("//ul[@id='blockbestsellers']").xpath("./li").should('have.length',6)

    })

})