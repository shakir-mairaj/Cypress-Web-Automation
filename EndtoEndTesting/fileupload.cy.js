import 'cypress-file-upload'
describe("FileUpload",()=>{

    it("SingleFileUpload",()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('notice.pdf')
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it("Fileuploadrename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'notice.pdf',fileName:'quotes.pdf'})
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it("DragandDropFile",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('sensors.pdf',{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get("#drag-drop-upload").contains('sensors.pdf')
    })

    it("MultipleFileUpload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["notice.pdf","sensors.pdf"])
        cy.wait(5000)
        cy.get(":nth-child(6) > strong").contains("Files You Selected")
    })

    it.only("ShadowDomFileUpload",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('notice.pdf')
        cy.wait(5000)

        cy.get(".smart-item-name",{includeShadowDom:true}).contains('notice.pdf')
    })
})