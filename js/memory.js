class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [],
    this.pairsClicked = 0,
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards(cards) {
    
    // let j, x, i;
    let shuffledCards = [...cards]
    // for (i = shuffledCards.length - 1; i > 0; i--) {
    //     j = Math.floor(Math.random() * (i + 1));
    //     x = shuffledCards[i];
    //     shuffledCards[i] = shuffledCards[j];
    //     shuffledCards[j] = x;

    //     return shuffledCards
    }
     shuffleCards(cards) {
      let m = this.cards.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        console.log(i)
        // And swap it with the current element.
        t = this.cards[m];
        console.log(t)
        this.cards[m] = this.cards[i];
        console.log(this.cards[m])
        this.cards[i] = t;
        console.log[i]
      }
      return cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked +=1
    
    if(card1 === card2){
      this.pairsGuessed++
      return true;
    } else {
      return false
    }
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true
    } else {
      return false
    }

  }
}

