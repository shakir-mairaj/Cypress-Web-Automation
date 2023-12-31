describe("Tables",()=>{
    beforeEach("Login",()=>{
        cy.visit("https://demo.opencart.com/admin/")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")

        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()

        cy.get("#menu-customer>a").click() // click on customer main menu
        cy.get("#menu-customer>ul>li:first-child").click() // click on customer sub menu
    
    })

    it("Check no of rows and columns", ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    })

    it("Check specific data from row or column",()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)").should('have.text','gorankrezic90@gmail.com')
    })

    it.only("Read all rows and columns",()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows)=>{

            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col,index,$cols)=>{

                    cy.log($col.text())

                })

            })

        })
    })
})


    

    