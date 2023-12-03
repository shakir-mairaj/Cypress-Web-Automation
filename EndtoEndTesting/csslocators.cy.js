describe('CSS Locators', () => {

    it("csslocatorstest", () =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts")   //id tag is optional
      
        cy.get("[name='submit_search']").click() //name attribute

        cy.get(".lighter").contains("T-Shirts")  //assertion



    })

})