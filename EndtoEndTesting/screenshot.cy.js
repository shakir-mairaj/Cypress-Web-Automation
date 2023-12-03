describe("Screenshot",()=>{
    it("Screenshotcapture",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage")

        cy.get("img[title='Your Store']").screenshot("logo")

        cy.get("#narbar-menu>ul>li:nth-child(5)").click()
        cy.get("div[id='content'] h2").should('have.text','Tablets')
    })
})