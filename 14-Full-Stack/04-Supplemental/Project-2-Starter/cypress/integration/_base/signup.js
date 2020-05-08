describe('Creating a New User Account', () => {

  const NEW_USER = 'newUser@test.com'
  const NEW_USER_PASSWORD = 'password'

  before(() => {
    cy.visit('/auth/logout')
  })

  beforeEach(() => {
    cy.visit('/');
  })

  it('should navigate to the signup page', () => {
    cy.visit('/signup')
  })

})