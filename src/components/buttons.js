import React, { Component } from 'react';
import {Spinner, ButtonGroup, AnchorButton } from '@blueprintjs/core';







export default class Buttons extends Component {
    render() {
      
        return (
            <div>
           
          
                <input type="button" value="0" onClick={(event) => this.props.cal(0)} /> <input type="button" value="clear" onClick={(event) => this.props.cal("clear")}/> <input type="button" value="*" onClick={(event) => this.props.cal("*")}/> <input type="button" value="/" onClick={(event) => this.props.cal("/")} />
                <br />
                <input type="button" value="1" onClick={(event) => this.props.cal(1)} /> <input type="button" value="2" onClick={(event) => this.props.cal(2)} /> <input type="button" value="3" onClick={(event) => this.props.cal(3)}/> <input type="button" value="-" onClick={(event) => this.props.cal("-")}/>
                <br />
                <input type="button" value="4" onClick={(event) => this.props.cal(4)} /> <input type="button" value="5" onClick={(event) => this.props.cal(5)} /> <input type="button" value="6" onClick={(event) => this.props.cal(6)}/> <input type="button" value="+" onClick={(event) => this.props.cal("+")}/>
                <br />
                <input type="button" value="7" onClick={(event) => this.props.cal(7)} /> <input type="button" value="8" onClick={(event) => this.props.cal(8)} /> <input type="button" value="9" onClick={(event) => this.props.cal(9)} /> <input type="button" value="=" onClick={(event) => this.props.cal("=")}/>
            </div>
        );
    }
}

