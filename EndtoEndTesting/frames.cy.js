import 'cypress-iframe'

describe("iFrameTest", ()=>{

    it("Frametest", ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("welcome {ctrl+a}" )

        cy.get("button[title='Bold']").click()
    })
})

    it.only("Frametest using plugin",()=>{
        
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded("#mce_0_ifr")  // load the frame

        cy.iframe("#mce_0_ifr").clear().type("welcome {ctrl+a}" )

        cy.get("button[title='Bold']").click()


    })