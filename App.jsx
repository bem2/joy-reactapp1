import React from 'react';

var App = React.createClass({
    displayname:'App',
    dosomething: function(){
           
     alert ('hello' + ' ' + this.props.user + "!!!");
    },
    render: function(){
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
              <a onClick={this.dosomething} href="#">Click Me</a>
         </div>
      );
    }

});

export default App;