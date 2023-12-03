class Login
{
    txtusername="input[placeholder='Username']"
    txtpassword="input[placeholder='Password']"
    submitbtn="button[type='submit']"
    label=".oxd-topbar-header-breadcrumb"

    setUserName(username)
    {
        cy.get(this.txtusername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtpassword).type(password)
    }

    clicksubmit()
    {
        cy.get(this.submitbtn).click()
    }

    verifyLogin()
    {
        cy.get(this.label).should('have.text','Dashboard')
    }

}
export default Login