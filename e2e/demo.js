/// <reference types="cypress" />

describe('demo test',()=>{
    it('it should list out all the tested pages', () =>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('Cucumber')

        cy.get ("[type='submit']").click()

        cy.get('div.product').should('be.visible')

        cy.get('.product-name').contains('Cucumber - 1 Kg')
        

    })
})