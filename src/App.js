import React from 'react';
import './App.css';

const quoteArr = [
                  {
                    quote:'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
                    author:'-Albert Einstein'
                  },
                  {
                    quote:'An eye for eye only ends up making the whole world blind.',
                    author:'-Mahatma Gandhi'
                  },
                  {
                    quote:'The main thing is to make history, not to write it.',
                    author:'-Otto Von Bismarck'
                  },
                  {
                    quote:'This creature softened my heart of stone. She died and with her died my last warm feelings for humanity.',
                    author:'-Joseph Stalin'
                  },
                  {
                    quote:'Be sure you put your feet in the right place, then stand firm.',
                    author:'-Abraham Lincoln'
                  },
                  {
                    quote:'It\'s not bragging if you can back it up.',
                    author:'-Muhammad Ali',
                  },
                  {
                    quote:'Life\'s most persistent and urgent question is, \'What are you doing for others?',
                    author:'-Martin Luther King Jr.'
                  },
                  {
                    quote:'Simplicity is the ultimate sophistication.',
                    author:'-Leonardo da Vinci'
                  },
                  {
                    quote:'If I have seen further than others, it is by standing upon the shoulders of giants.',
                    author:'-Isaac Newton'
                  },
                  {
                    quote:'Success is never found. Failure is never fatal. Courage is the only thing.',
                    author:'-Winston Churchill'
                  }
                 ];
//An array containing objects with quote and author properties

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: Math.floor((Math.random() * 10))
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let strict = this.state.index;
    function diffQuote() {
      let a = Math.floor((Math.random() * 10));
      while (a === strict) {
        a = Math.floor((Math.random() * 10));
      }
      return a;
    }
    //diffQuote makes sure that we don't get the same quote twice in a row
    this.setState({
      index: diffQuote()
    });
  }

  render() {
    return (
    <div>
      <p id="text">{quoteArr[this.state.index].quote}</p>
      <p id="author">{quoteArr[this.state.index].author}</p>
      <button onClick={this.handleClick} id="new-quote">New quote</button>
      <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
    </div>
    );
  }
}

export default Quotes;
