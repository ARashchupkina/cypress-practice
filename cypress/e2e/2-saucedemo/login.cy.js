/// <reference types="cypress" />

describe('Login from tests', () => {
    const correctUserName = 'standard_user';
    const correctUserPassword = 'secret_sauce';
    const lockedUserName = 'locked_out_user';

     
    beforeEach(() => {
        cy.visit('/')
    
    })
  
    it.only('Success Login with credentials', () => {
        cy.get('[data-test="username"]').type(correctUserName);
        cy.get('[data-test="password"]').type(correctUserPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.contains('Products').should('be.visible');
        cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')

    });
  

    it.only('Login with incorrect credentials', () => {
        cy.get('[data-test="username"]').type('random_name');
        cy.get('[data-test="password"]').type('random_pass');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    });

    it.only('Login with locked credentials', () => {
        cy.get('[data-test="username"]').type(lockedUserName);
        cy.get('[data-test="password"]').type(correctUserPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    });

    it.only('Login without userName', () => {
        cy.get('[data-test="password"]').type(correctUserPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')

    });

    it.only('Login without userPassword', () => {
        cy.get('[data-test="username"]').type(correctUserName);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')


    });

  })
  