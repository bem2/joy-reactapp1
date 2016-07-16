import React from 'react';

class App extends React.Component {
   render() {
    var bemStyle = {
         border: '1px solid red',
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
}

export default App;