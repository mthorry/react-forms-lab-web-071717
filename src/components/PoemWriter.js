import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const validate = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: true
    }
  };

  setPoem = event => {
    const poem = event.target.value
    this.setState({
      poem,
      isValid: validate(poem)
    })
  };

  render() {
    if (this.state.isValid) {
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            value={this.state.poem}
            onChange={this.setPoem}
          />
        </div>
      );
    } else {
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            value={this.state.poem}
            onChange={this.setPoem}
          />
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        </div>
      );
    }
  }
}

export default PoemWriter;