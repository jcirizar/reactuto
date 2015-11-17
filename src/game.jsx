var React = require('react');
var ReactDOM = require('react-dom');

var StarsFrame = React.createClass({
  render: function() {
    return (
        <div id="stars-frame">
          <div className="well">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
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
        <div id="answer-frame">
          <div className="well">
            ....
          </div>
        </div>
    );
  }
});

var Game = React.createClass({
  render: function() {
    return (
        <div id="game">
          <h2>Play Nine</h2>
          <StarsFrame />
          <ButtonFrame />
          <AnswerFrame />
        </div>
    );
  }
});

ReactDOM.render(<Game />, document.getElementById('container'));