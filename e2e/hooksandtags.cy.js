// Hooks-- 
// Before--- Will execute only once before all it blocks
// After-- Will execute only once after all it blocks
// beforeeach-- will execute before every it block
//aftereach-- will execute after every it block

// Tags:
// it.only-- Only this it block will be executed
//it.skip-- this it block will be skipped

describe("Hooksandtags",()=>{

    before(()=>{
        cy.log("** Launch App***")

    })

    after(()=>{
        cy.log("** Close App***")
    })

    beforeEach(()=>{
        cy.log("***Login***")
    })

    afterEach(()=>{
        cy.log("***Logout***")

    })

    it.only("Search",()=>{
        cy.log("*** Search***")
    })

    it("Advanced Search",()=>{
        cy.log("*** Advanced Search***")
    })

    it.skip("Products",()=>{
        cy.log("*** Products***")
    })
})
