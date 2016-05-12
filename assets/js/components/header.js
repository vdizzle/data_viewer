var React = require('react');

var CDHeader = React.createClass({
  render: function() {
    return (
      <header>
        <nav className="navbar">
          <div className="logo">DataViewer</div>
          <div className="menu">
            <ul>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </nav>
        </header>
      );
  }
});

module.exports = CDHeader;
