describe('App E2E', () => {
    
    it('Wait api and click post', () => {
        cy.visit('http://localhost:3007');
        cy.wait(4000);
        cy.get('.post-item').first().click('bottomLeft', { force: true });
    });

    it('Dismiss post', () => {
        cy.wait(2000);
        cy.get('.post-item__body__more__dismiss--button').first().click('bottomLeft', { force: true });
        cy.wait(2000);
        cy.get('.swal2-confirm').first().click('bottomLeft', { force: true });
    });

    it('Pagination', () => {
        cy.wait(2000);
        cy.get('.page-item:last-child .page-link').first().click('bottomLeft', { force: true });
        cy.wait(2000);
    });

    it('Pagination', () => {
        cy.wait(2000);
        cy.get('.post-item').first().click('bottomLeft', { force: true });
        cy.wait(2000);
    });

    it('Dismiss All', () => {
        cy.wait(2000);
        cy.get('.main-wrapper__contain__navigation-bar__actions--dismiss-all').first().click('bottomLeft', { force: true });
        cy.wait(2000);
        cy.get('.swal2-confirm').first().click('bottomLeft', { force: true });
    });

    it('Dark Mode', () => {
        cy.wait(2000);
        cy.get('.pretty.p-switch label').first().click('bottomLeft', { force: true });
        cy.wait(2000);
    });

  });