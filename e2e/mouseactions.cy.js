import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
describe("MouseActions",()=>{
    it("MouseHover",()=>{

        cy.visit("https://demo.opencart.com/")
        cy.get("#narbar-menu>ul>li:first-child").trigger('mouseover').click()

        cy.get("div[class='dropdown-menu show']>div[class='dropdown-inner']>ul>li:first-child").should('be.visible')

    })

    it("RightClick",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should('be.visible')
    })

    it("RightClick2ndMethod",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should('be.visible')
    })

    it("DoubleClick",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        cy.iframe("#iframeResult").find("#demo").contains("Hello World")

        //2nd method for double click
        //cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
       
    })

    it("DragandDrop",()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box5").drag("#box106")

    })

    it.only("PageScroll",()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get("img[alt='Flag of Brazil']").scrollIntoView({duration:2000})
        cy.get("img[alt='Flag of Brazil']").should('be.visible')
    })
    
})