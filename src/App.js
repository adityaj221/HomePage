import React from 'react';
import './App.css';

/////////////////
/// COMPONENTS //
/////////////////

// Container
var App = React.createClass({
  getInitialState: function() {
    return null
  },

  render: function() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
});


// Header
var Header = React.createClass({
  getInitialState: function() {
    return {items: ['Home', 'About', 'Contact']}
  },
  render: function() {
    let items = this.state.items.map((item, i) => {
      return <li key={i}> {item} </li>
    })
    return (
      <div className="Header">
        <div id="navigation" className="Navigation">
          <nav>
            <ul>
              {items}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
});

// Body
var Body = React.createClass({
  render: function() {
    var image = <Image isTextOverLay={false} src='http://bolt.fundingsocieties.com/images/bolt_background.jpg'/>
    return (
      <div className='wrapper'> 
        {image}
        <div className="login">
          <Button text='Login' />
          <Button text='Register' />
        </div>
        <div className="text">
          We are a peer-to-perr lending platform
        </div>
      </div>
    )
  }
});

// Button
var Button = React.createClass({
  getDefaultProps: function() {
    return {text: ''}
  },
  render: function() {
    return (
      <div className='Button'> 
        {this.props.text}
      </div>
    );
  }
});

//Image
var Image = React.createClass({
  getDefaultProps: function() {
    return {src: '',isTextOverlay : false}
  },
  render: function() {
      var isTextOverlay = this.props.isTextOverlay
      var text = isTextOverlay ? <label> Text is here </label> : ''
      return (
        <div className='img-wrapper'> 
          {text}
          <img src={this.props.src} className='image' role="presentation"/>
        </div>
      )
  }
});

export default App;
