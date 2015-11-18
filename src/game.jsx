var React = require('react');
var ReactDOM = require('react-dom');

var StarsFrame = React.createClass({
  render: function() {
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {
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
    var disabled;
    disabled = (this.props.selectedNumbers.length === 0);
    return (
        <div id="button-frame">
          <button className="button" disabled={disabled}>=</button>
        </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function (i) {
      return (
          <span key={i} onClick={props.unselectNumber.bind(null, i)} >{i}</span>
      );
    });

    return (
        <div id="answer-frame" className="well">
            {selectedNumbers}
        </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render: function() {
    var numbers = [],
        className,
        selectedNumbers = this.props.selectedNumbers,
        selectNumber=this.props.selectNumber;

    for (var i = 1; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      numbers.push(
          <div key={i} className={className} onClick={selectNumber.bind(null, i)} >{i}</div>
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
      selectedNumbers: [],
      numberOfStars: Math.ceil(Math.random() * 9)
    };
  },
  selectNumber: function(selectedNumber) {
    if (this.state.selectedNumbers.indexOf(selectedNumber) < 0) {
      this.setState(
          { selectedNumbers: this.state.selectedNumbers.concat(selectedNumber) }
      )
    }
  },
  unselectNumber: function(clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers,
        indexOfNumber = selectedNumbers.indexOf(clickedNumber);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({ selectedNumbers: selectedNumbers});
  },
  render: function() {
    var selectedNumbers = this.state.selectedNumbers,
        numberOfStars = this.state.numberOfStars;
    return (
        <div id="game">
          <h2>Play Nine</h2>
          <hr/>
          <div className="cont">
            <StarsFrame numberOfStars={numberOfStars} />
            <ButtonFrame selectedNumbers={selectedNumbers}/>
            <AnswerFrame  selectedNumbers={selectedNumbers}
                          unselectNumber={this.unselectNumber}/>
          </div>
          <NumbersFrame selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} />

        </div>

    );
  }
});

ReactDOM.render(<Game />, document.getElementById('container'));