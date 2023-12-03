import Login from "..//PageObjects/Login.js"

describe("PageObjectModelTest",()=>{

    it("POM Test",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login() //creating object of Login class from Login.js file

        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clicksubmit()
        ln.verifyLogin()

    })

    // using pom with fixture
    it.only("POMwithfixture",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("orangehrm.json").then((data)=>{
            const ln=new Login() //creating object of Login class from Login.js file

            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clicksubmit()
            ln.verifyLogin()
    
        })

    })
})