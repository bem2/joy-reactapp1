import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Hello {this.props.user}</h1> 
            <p>{this.props.children}</p>
         </div>
      );
   }
}

export default App;