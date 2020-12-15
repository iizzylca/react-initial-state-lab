import React from 'react'
class Bomb extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    status = () => {
        if(this.state.secondsLeft === 0) {
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render(){
        return(
            <div>{this.status()}</div>
        )
    }

}

export default Bomb