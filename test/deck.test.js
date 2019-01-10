// --------------------------------------------------
// NOTES
// --------------------------------------------------
// This file contains all the tests for the Deck class that you're about to write!
// The test cases are split up into the following groups:
//   - 'General'
//   - 'Instance properties'
//   - 'Instance methods'
// Take a moment to read through each of the test case descriptions.
// Once you understand the requirements for each case, hop over to the `src/deck.js` and start implementing your solutions.

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
const Deck = require('../src/deck');

// --------------------------------------------------
// DEFINE TESTS
// --------------------------------------------------
describe('Deck', () => {
  describe('General', () => {
    // Since the `src/deck.js` file exports the Deck class, this test will pass. Hooray!
    it('should be constructable', () => {
      expect(new Deck()).toBeInstanceOf(Deck);
    });
  });

  // The tests below ensure that all of the instance properties are present, and work as expected.
  describe('Instance properties', () => {
    describe('cards', () => {
      it('should be an array', () => {
        const deck = new Deck();

        expect(Array.isArray(deck.cards)).toBe(true);
      });

      it('should have a length of 52', () => {
        const deck = new Deck();

        expect(deck.cards.length).toBe(52);
      });

      it('should populate the array with numbers', () => {
        const deck = new Deck();

        expect(deck.cards.every(card => typeof card === 'number')).toBe(true);
      });

      it('should set the card at the 0th position to the number 1', () => {
        const deck = new Deck();

        expect(deck.cards[0]).toBe(1);
      });

      it('should set the card at the last position to the number 52', () => {
        const deck = new Deck();

        expect(deck.cards[deck.cards.length -1]).toBe(52);
      });
    });
  });

  // These tests make assertions about the functionality of each deck instance.
  describe('Instance methods', () => {
    describe('shuffle()', () => {
      it('should be a function', () => {
        const deck = new Deck();

        expect(typeof deck.shuffle).toBe('function');
      });

      it('should shuffle the cards', () => {
        const deck = new Deck();
        const [card1, card2, card3] = deck.cards;

        deck.shuffle();

        expect(card1).not.toBe(deck.cards[0]);
        expect(card2).not.toBe(deck.cards[1]);
        expect(card3).not.toBe(deck.cards[3]);
      });

      it('should not affect the number of cards', () => {
        const deck = new Deck();
        deck.cards = [1,2,3];

        deck.shuffle();

        expect(deck.cards.length).toBe(3);
      });

      it('should return the shuffled cards', () => {
        const deck = new Deck();

        const cards = deck.shuffle();

        expect(cards).toBe(deck.cards);
      });
    });

    describe('draw()', () => {
      it('should be a function', () => {
        const deck = new Deck();

        expect(typeof deck.draw).toBe('function');
      });

      it('should return undefined if invoked with a non-number', () => {
        const deck = new Deck();

        expect(deck.draw('')).toBe(undefined);
        expect(deck.draw('Hello, world!')).toBe(undefined);
        expect(deck.draw(true)).toBe(undefined);
        expect(deck.draw(false)).toBe(undefined);
        expect(deck.draw({})).toBe(undefined);
        expect(deck.draw([])).toBe(undefined);
      });

      it('should return the "top" card when invoked with 0 arguments', () => {
        const deck = new Deck();
        deck.cards = [1,2,3];

        const card = deck.draw();

        expect(card).toBe(3);
      });

      it('should return an array containing the "top" 2 cards when invoked with the number 2', () => {
        const deck = new Deck();
        deck.cards = [1,2,3];

        const cards = deck.draw(2);

        expect(cards).toEqual(expect.arrayContaining([3,2]));
      });

      it('should reduce the number of cards by N', () => {
        const deck = new Deck();
        const n = 2;
        deck.cards = [1,2,3];

        deck.draw(2);

        expect(deck.cards.length).toBe(1);
      });

      it('should return -1 if there are no more cards to draw', () => {
        const deck = new Deck();
        deck.cards = [];

        const card = deck.draw();

        expect(card).toBe(-1);
      });
    });
  });
});
