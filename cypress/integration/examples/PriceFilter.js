/// <reference types="Cypress"/>
import MyStore from '../pageObjects/MyStore';

describe('Price Filter Test Suite', function () {
    let data;
    const myStore = new MyStore();
    before(function () {
        cy.fixture('example.json').then(function (fdata) {
            data = fdata
        });
    });
    beforeEach(function () {
        cy.visit(Cypress.env('url'));
    });

    it('UI test suite for Price filter feature using both minimum and maximum filters', function () {
        cy.wait(1000);
        myStore.getMinPrice().select(data.minPrice);
        cy.wait(1000);
        myStore.getMaxPrice().select(data.maxPrice);
        cy.wait(1000);
        myStore.getProductPrice().each(($e1, index, $list) => {
            console.log("price", $e1.text());
            expect(parseInt($e1.text()) >= data.minPrice && parseInt($e1.text()) <= data.maxPrice).to.be.true;

        });
    });

    it('UI test suite for Price filter feature for minimum price', function () {
        cy.wait(1000);
        myStore.getMinPrice().select(data.minPrice);
        cy.wait(1000);
        myStore.getProductPrice().each(($e1, index, $list) => {
            console.log("price", $e1.text());
            expect(parseInt($e1.text()) >= data.minPrice).to.be.true;

        });
    });

    it('UI test suite for Price filter feature using maximum filter', function () {
        cy.wait(1000);
        myStore.getMaxPrice().select(data.maxPrice);
        cy.wait(1000);
        myStore.getProductPrice().each(($e1, index, $list) => {
            expect(parseInt($e1.text()) <= data.maxPrice).to.be.true;

        });
    });

});