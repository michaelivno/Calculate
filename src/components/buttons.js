import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';








export default class Buttons extends Component {
    render() {

        return (
            <div>

                <div style={topDiv}>
                    <Button inverted color='red' onClick={(event) => this.props.cal(0)} >0</Button><Button inverted color='blue' onClick={(event) => this.props.cal("*")}>*</Button><Button inverted color='blue' onClick={(event) => this.props.cal("/")}>/</Button>
                </div>
                <div>

                    <Button inverted color='red' onClick={(event) => this.props.cal(1)} >1</Button><Button inverted color='red' onClick={(event) => this.props.cal(2)} >2</Button><Button inverted color='red' onClick={(event) => this.props.cal(3)}>3</Button><Button inverted color='blue' onClick={(event) => this.props.cal("-")}>-</Button>
                    <br />
                    <Button inverted color='red' onClick={(event) => this.props.cal(4)}>4</Button><Button inverted color='red' onClick={(event) => this.props.cal(5)} >5</Button><Button inverted color='red' onClick={(event) => this.props.cal(6)}>6</Button><Button inverted color='blue' onClick={(event) => this.props.cal("+")}>+</Button>
                    <br />
                    <Button inverted color='red' onClick={(event) => this.props.cal(7)} >7</Button><Button inverted color='red' onClick={(event) => this.props.cal(8)} >8</Button><Button inverted color='red' onClick={(event) => this.props.cal(9)} >9</Button><Button inverted color='blue' onClick={(event) => this.props.cal("=")}>=</Button>
                </div>
                <br />
                <Button inverted onClick={(event) => this.props.cal("clear")}>Clear</Button>
            </div>
        );
    }
}

const topDiv = {
    padding: Audio
}