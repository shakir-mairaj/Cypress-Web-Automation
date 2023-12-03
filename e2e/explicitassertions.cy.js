describe('ExplicitAssertions', () =>{
    it("Explicittest", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")

        cy.get("button[type='submit']").click()

        let expName="Paul Collings"

        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actName =x.text()

            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert(actName).to.equal(expName)
            assert(actName).to.not.equal(expName)

        })
    })
})