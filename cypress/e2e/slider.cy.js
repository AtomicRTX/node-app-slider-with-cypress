describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can navigate slides using next and prev buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').then(($firstSlide) => {
      const firstSlideText = $firstSlide.text();
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should(($newSlide) => {
        expect($newSlide.text()).not.to.eq(firstSlideText);
      });
    });
    cy.get('.swiper-slide-active').then(($secondSlide) => {
      const secondSlideText = $secondSlide.text();
      cy.get('.swiper-button-prev').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should(($prevSlide) => {
        expect($prevSlide.text()).not.to.eq(secondSlideText);
      });
    });
  });
});