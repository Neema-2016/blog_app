import React from 'react';

class CComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Class Components",
            time: new Date().toString(),
        };
    }
    componentDidMount() {
        console.log("I am from Did Mount");
        this.interval = setInterval(this.componentDidUpdate, 1000);
    }

    componentDidUpdate(){
        console.log("I am from update");
    }

    componentWillUnmount(){
        console.log("I am from Unmount");
        clearInterval(this.interval)
    }

    showDate = () => {
        this.setState({ time: new Date().toString()});
    }

    render(){
        return(
            <div>
                {this.state.message}
                <div>{this.state.time}</div>
            </div>
        )
    }   
}

export default CComponent