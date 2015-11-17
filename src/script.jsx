var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
  render: function() {
    return (
        <div>
          <img src="" alt=""/>
          <h3>Name here</h3>
          <hr/>
        </div>
    )
  }
});

var Main = React.createClass({
  render: function() {
    return (
        <div>
          <Card />
        </div>
    );
  }
});




ReactDOM.render( <Main /> , document.getElementById('root'));