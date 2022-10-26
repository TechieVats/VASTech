class MyStore
{

 getProductPrice() {
    return cy.get('.product-price').find('.product-price-value');
 }
 
 getMinPrice() {
    return cy.get('#filter-price-min');
 }

 getMaxPrice() {
    return cy.get('#filter-price-max');
 }

 getProducRatingDetails() {
    return cy.get('.form-check');
 }

 selectProductRating() {
    return cy.get('[name="filter-rating"]');
 }
 getProductRatingValue() {
    return cy.get('.product-rating');
 }

}

export default MyStore;