import React, { Component } from 'react';
import HeaderSection from '../containers/header';
import MainSection from '../containers/main';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "VIDEO LIST",
            description: "Searched words show with youtube API"
        }
    }
    render() {
        return (
            <div className="container">
                <HeaderSection title={this.state.title} description={this.state.description} />
                <MainSection />
            </div>
        );
    }
}
export default App;
