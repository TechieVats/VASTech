// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('validatingTheSorting', (expectedList=[]) => { 

    cy.get('.product-price').find('.product-price-value')
    .then(($prices)=>
        Cypress._.map($prices,(el) => el.innerText),
    )
    .then((actualList) => actualList.map(parseFloat))
    .then((actualList) => {
        //afterSorting = Cypress._.sortBy(list)
        console.log('new list is: ', expectedList);
        expect(actualList).to.deep.equal(expectedList);
        
    })
 })

 Cypress.Commands.add('priceSortBy',(sortingBy) => {
    cy.get('#sort-by').select(sortingBy);
 })