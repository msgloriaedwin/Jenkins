
/// <reference types="cypress" />

describe('demo test',()=>{
    it('Verify all products are displayed', () =>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // cy.title().should('eq', 'GREENKART')

        cy.get('.search-keyword').type('Ca')

        cy.get('.product:visible').should('have.length', 4)
        

    })
})