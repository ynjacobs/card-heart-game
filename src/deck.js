class Deck {
  // We've defined the constructor method, although it's not currently doing anything.
  // This is the perfect place to set up the initial state of any new Deck instances.
  constructor() {

    this.cards = Array.from({length: 52}, (v, i) => i + 1);
  
  }

  shuffle() {
    this.cards.forEach((e, index) => {
      //  newIndex = 0;
      let loop = true;
      while(loop)
      {
        let newIndex = Math.floor(Math.random() * this.cards.length);

        if(newIndex != index)
        {
          let temp = this.cards[newIndex];
          this.cards[newIndex] = e;
          this.cards[index] = temp;

          
          loop = false;
        }


      }

    });

    return this.cards;
  }

  draw(num) {
    if (num == undefined){
      // const card1 = this.cards[this.cards.length - 1];
      if(this.cards.length == 0)
    {
      return -1;
    }
      return this.cards.pop() ; 
    }
    else if(!Number.isInteger(num) )
    {
      return undefined;
    }
    else {
      let drawnCards = [];
      for(var i = 0; i < num; i++)
      {
        drawnCards.push(this.cards.pop());
      }
return drawnCards;
    }
  }

  // Any additional instance methods required by the test suite can be defined below.
}
// const deck = new Deck();
// deck.shuffle();
module.exports = Deck;

