import React from 'react';
import './App.css';
//Imported portraits of the authors.
import einstein from './RQM-assests/einstein.jpg';
import gandhi from './RQM-assests/gandhi.jpg';
import bismarck from './RQM-assests/bismarck.jpg';
import stalin from './RQM-assests/stalin.jpg';
import lincoln from './RQM-assests/lincoln.jpg';
import ali from './RQM-assests/ali.jpg';
import mlk from './RQM-assests/mlk.jpg';
import vinci from './RQM-assests/vinci.jpg';
import newton from './RQM-assests/newton.jpg';
import churchill from './RQM-assests/churchill.jpg';

const quoteArr = [
                  {
                    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
                    author: '-Albert Einstein',
                    portrait: einstein
                  },
                  {
                    quote: 'An eye for eye only ends up making the whole world blind.',
                    author: '-Mahatma Gandhi',
                    portrait: gandhi
                  },
                  {
                    quote: 'The main thing is to make history, not to write it.',
                    author: '-Otto Von Bismarck',
                    portrait: bismarck
                  },
                  {
                    quote: 'This creature softened my heart of stone. She died and with her died my last warm feelings for humanity.',
                    author: '-Joseph Stalin',
                    portrait: stalin
                  },
                  {
                    quote: 'Be sure you put your feet in the right place, then stand firm.',
                    author: '-Abraham Lincoln',
                    portrait: lincoln
                  },
                  {
                    quote: 'It\'s not bragging if you can back it up.',
                    author: '-Muhammad Ali',
                    portrait: ali
                  },
                  {
                    quote: 'Life\'s most persistent and urgent question is, \'What are you doing for others?',
                    author: '-Martin Luther King Jr.',
                    portrait: mlk
                  },
                  {
                    quote: 'Simplicity is the ultimate sophistication.',
                    author: '-Leonardo da Vinci',
                    portrait: vinci
                  },
                  {
                    quote: 'If I have seen further than others, it is by standing upon the shoulders of giants.',
                    author: '-Isaac Newton',
                    portrait: newton
                  },
                  {
                    quote: 'Success is never found. Failure is never fatal. Courage is the only thing.',
                    author: '-Winston Churchill',
                    portrait: churchill
                  }
                 ];
//An array containing objects with quote and author properties

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    //index state is set to random number initially.
    this.state = {
      index: Math.floor((Math.random() * 10))
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //When we click on "New quote", we generate a random number which will serve as our index in the quoteArr array.
  handleClick() {
    let strict = this.state.index;
    function diffQuote() {
      let a = Math.floor((Math.random() * 10));
      while (a === strict) {
        a = Math.floor((Math.random() * 10));
      }
      return a;
    }
    //diffQuote makes sure that we don't get the same quote twice in a row.
    this.setState({
      index: diffQuote()
    });
  }

  render() {
    return (
    <div>
      <p id="text">{quoteArr[this.state.index].quote}</p>
      <p id="author">{quoteArr[this.state.index].author}</p>
      <img id="author-pic" src={quoteArr[this.state.index].portrait}/>
      <button onClick={this.handleClick} id="new-quote">New quote</button>
      <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
    </div>
    );
  }
}

export default Quotes;
