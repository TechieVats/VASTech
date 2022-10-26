/// <reference types="Cypress"/>
import MyStore from '../pageObjects/MyStore';
describe('Sort by filter Test Suite ', async () => {

    before(function () {
        cy.fixture('example.json').then(function (data) {
            this.data = data
        });
    })

    beforeEach(function () {
        cy.visit(Cypress.env('url'));
    })

    it('Sort filter to validate high to low and low to high by price', function () {
        const myStore = new MyStore();
        let expectedLowToHigh = [];
        let expectedHighToLow = [];
        cy.wait(1000);
        myStore.getProductPrice()
            .then(($prices) =>
                Cypress._.map($prices, (el) => el.innerText),
            )
            .then((list) => list.map(parseFloat))
            .then((list) => {
                expectedLowToHigh = Cypress._.sortBy(list);
                expectedHighToLow = Cypress._.sortBy(list).reverse();
            })



        cy.priceSortBy(this.data.sortHighTOLow);
        cy.wait(4000);
        myStore.getProductPrice()
            .then(($prices) =>
                Cypress._.map($prices, (el) => el.innerText),
            )
            .then((actualList) => actualList.map(parseFloat))
            .then((actualList) => {
                expect(actualList).to.deep.equal(expectedHighToLow)

            })

        cy.wait(1000);
        cy.priceSortBy(this.data.sortLowToHigh);
        cy.wait(4000);
        myStore.getProductPrice()
            .then(($prices) =>
                Cypress._.map($prices, (el) => el.innerText),
            )
            .then((list1) => list1.map(parseFloat))
            .then((list1) => {
                expect(list1).to.deep.equal(expectedLowToHigh);
            });

    });

});