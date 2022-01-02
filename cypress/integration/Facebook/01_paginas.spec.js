///<reference types="cypress" />

import { Home } from "./Home/home";

describe("Home Facebook", () => {
  const home = new Home();

  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
    // https://demoqa.com/automation-practice-form
  });

  it("Verificar que el usuario ingrese con sus datos", () => {});
});
