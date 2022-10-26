/// <reference types="Cypress"/>
import MyStore from '../pageObjects/MyStore';
describe('Rating filter Test Suite', function () {

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

    it('UI test suite to fully validate the Rating filter', function () {
        cy.wait(1000);

        // below code is iterating over all present ratings and validating against the expected outcomes
        myStore.getProducRatingDetails().each(($e1, index, $list) => {
            myStore.selectProductRating().eq(index).click();

            myStore.getProductRatingValue().each(($e2, index1, $list) => {
                expect($e1.text().trim().substring(0, 1) >= $e2.text()).to.be.true;
            })
        })

    });
});