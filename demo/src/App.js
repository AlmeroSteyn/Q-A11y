import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;