import React from 'react';

var App = React.createClass({
    displayname:'App',
    render(){
            var bemStyle = 
                {
         border: '1px dashed #ccc',
         padding: '30px',
         color: '#666'
                }
       
      return (
         <div style={bemStyle}>
            <h1>Hello {this.props.user}</h1> 
            <p>{this.props.children}</p>
         </div>
      );
    }

});

export default App;