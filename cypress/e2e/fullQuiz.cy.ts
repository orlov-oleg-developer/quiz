import { BASE_URL } from '../../src/shared/constants/baseConstants';
/* eslint-disable indent */
describe('testing full quiz', () => {
  it('passes', () => {
    cy.visit(BASE_URL)

    cy.get('[data-testid="QuizPage"]').should('exist');

    cy.get('[data-testid="QuizTitle"]')
      .should('exist')
      .should('have.text', 'Опросник')

    /**Первый вопрос */
    cy.get('[data-testid="check 2"]')
      .should('exist')
      .first()
      .click()

    cy.get('[data-testid="nextQuestion"]')
      .should('exist')
      .click()

    /**Второй вопрос */
    cy.get('[data-testid="check 3"]')
      .should('exist')
      .first()
      .click()

    cy.get('[data-testid="nextQuestion"]')
      .should('exist')
      .click()

    /**Третий вопрос */
    cy.get('[data-testid="check 2"]')
      .should('exist')
      .first()
      .click()

    cy.get('[data-testid="nextQuestion"]')
      .should('exist')
      .click()

    /**Четвертый вопрос */
    cy.get('[data-testid="check 1"]')
      .should('exist')
      .first()
      .click()

    cy.get('[data-testid="nextQuestion"]')
      .should('exist')
      .click()

    /**Пятый вопрос */
    cy.get('[data-testid="check 4"]')
      .should('exist')
      .first()
      .click()

    cy.get('[data-testid="nextQuestion"]')
      .should('exist')
      .click()

    /**Шестой вопрос */
    cy.get('[data-testid="check 2"]')
      .should('exist')
      .first()
      .click()

    cy.get('[data-testid="finishQuiz"]')
      .should('exist')
      .click()

    /**Результаты */
    cy.get('[data-testid="totalScore"]')
      .should('exist')
      .should('have.text', 'Количество правильных ответов: 1/6')

    cy.get('[data-testid="resetartQuiz"]')
      .should('exist')
  })
})