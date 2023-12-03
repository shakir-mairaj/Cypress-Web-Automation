# Cypress-Web-Automation
Cypress Web Automation- End to End Testing using JavaScript
                                  CYPRESS NOTES
                                       Installation
•	Download and install node js 
(Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. In simple terms, it lets you use JavaScript to build server-side applications.)
•	Download and install VS Code.
•	Create a new folder in pc and open that folder in VS code
•	In terminal enter command npm -i init – it creates package.json file
•	To install cypress enter npm install cypress –save -dev command in terminal.
•	To run cypress enter command npx cypress open in terminal.
•	Electron is the default browser supported in Cypress
•	The tests are created in folder cypress-e2e-file
•	The test files are called spec files in cypress
•	To create spec file in cypress—create spec file and save.

SYNTAX
•	We can create spec file from VS code as well by creating a new file with extension cy.js eg: mytest.cy.js
•	These 2 are the syntax for writing and executing test cases:

•	 

•	We can use arrow function => or we can use function keyword

•	Spec file(cy.js)describe blocks(test suite)it blocks(tests)

•	To run cypress tests—enter command npx cypress run (It will run all spec files)

•	To run particular file enter npx cypress run  --spec –filenameandpath –headed

•	To run in particular browser enter command npx cypress run  --browser chrome  

•	 Add ///<reference types="Cypress" />   in commands.js file to add cypress library in all scripts by default

LOCATORS

•	Locators supported are: CSS and xPath

•	cy.get(CSS Locator)

•	CSS Selector: 

•	tag id

•	tag class

•	tag attribute

•	tag class attribute
# tag is optional
•	tag #id
•	tag.class
•	tag[attribute=’value’]
•	tag.class[attribute=’value’]
•	
xPath:
	To use xpath, install xpath plugin using command in terminal:
	npm install -D @cypress/xpath 
	Add /// <reference types="@cypress/xpath" />
	Add require('@cypress/xpath') in e2e.js
•	cy.xpath(Xpath)
•	cy.xpath(xpath).xpath(xpath) – chained xpath


     ASSERTIONS

•	Implicit Assertions—built in assertions
•	  should
•	  and
•	eq
•	contain
•	include
•	exist
•	have.length
•	have.value
etc
•	Explicit Assertions--explicitly
•	Expect—BDD approach
•	Assert – TDD approach


                               FOLDER STRUCTURE

        

