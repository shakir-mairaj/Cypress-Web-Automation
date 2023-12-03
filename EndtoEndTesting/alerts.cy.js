describe('alertstest', () =>{
    // 1) The alert will have some text and OK button

    it("alertstesting", ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert", (t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

        //alert window automatically closed by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert')
    })
})

    // 2) Alert with ok and cancel button// to click on ok button

    it("alertconfirm",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm",(o)=>{
        expect(o).to.contains("I am a JS Confirm")

        })

        cy.get("#result").should('have.text','You clicked: Ok')
    })

    //3) Alert to cancel
    it("alertcancel",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm",(o)=>{
        expect(o).to.contains("I am a JS Confirm")

        })

        cy.on("window:confirm",()=> false) // will click on cancel button
        cy.get("#result").should('have.text','You clicked: Cancel')
    })

    //4 Prompt alert
    it("Prompt Alert Test",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Welcome")
            
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text','You entered: Welcome')
    })
    
    //5 Prompt alert cancel
    it("Prompt Alert Test cancel",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("null")
            
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.on("window:prompt",()=> false)
        cy.get("#result").should('have.text','You entered: null')
    })

    //6 Authentication
    it.only("AuthenticationTest",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {username:"admin", password:"admin"}
    })
    cy.get("div[class='example'] p").should('contain','Congratulations')

    })