var React = require('react');
var ReactDOM = require('react-dom');

var StarsFrame = React.createClass({
  render: function() {
    var numberOfStars = Math.ceil(Math.random() * 9);
    var stars = [];
    for (var i = 0; i < numberOfStars; i++) {
      stars.push(
        <i key={i} className="fa fa-star"></i>
      );
    }

    return (
        <div id="stars-frame" className="well">
            {stars}
        </div>
    );
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    return (
        <div id="button-frame">
          <button className="button">=</button>
        </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
        <div id="answer-frame" className="well">
            {this.props.selectedNumbers}
        </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render: function() {
    var numbers = [],
        className,
        selectedNumbers = this.props.selectedNumbers,
        clickNumber=this.props.clickNumber;

    for (var i = 1; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      numbers.push(
          <div key={i} className={className} onClick={clickNumber.bind(null, i)} >{i}</div>
      );
    }
    return (
        <div id="numbers-frame" className="well">
            {numbers}
        </div>
    );
  }
});

var Game = React.createClass({
  getInitialState: function() {
    return {
      selectedNumbers: []
    };
  },
  clickNumber: function(clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState(
          { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) }
      )
    }

  },
  render: function() {
    return (
        <div id="game">
          <h2>Play Nine</h2>
          <hr/>
          <div className="cont">
            <StarsFrame />
            <ButtonFrame />
            <AnswerFrame  selectedNumbers={this.state.selectedNumbers} />
          </div>
          <NumbersFrame selectedNumbers={this.state.selectedNumbers} clickNumber={this.clickNumber} />

        </div>

    );
  }
});

ReactDOM.render(<Game />, document.getElementById('container'));