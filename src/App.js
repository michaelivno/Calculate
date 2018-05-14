import React, { Component } from 'react';
import './App.css';
import Buttons from './components/buttons';


export default class App extends Component {

  state = {
    numbers: '',
    numbers2: '',
    plus: '',
    minus: '',
    divide:'',
    equls: '',
    dual:''
  }

  calculate = (number) => {

        this.setState({ numbers: this.state.numbers + number })

    if (number === "-") {
      this.setState({
        numbers2: this.state.numbers,
        minus: true,
        numbers:""

      })
      
    }else if (number === "+") {

      this.setState({
        numbers2: this.state.numbers,
        plus: true,
        numbers: ''
      })
    }else if (number === "/") {

      this.setState({
        numbers2: this.state.numbers,
        divide: true,
        numbers: ''
      })
    }else if(number === "*"){
      this.setState({
        numbers2: this.state.numbers,
        dual:true,
        numbers:''
    })

    } else if (number === "=") {

      if (this.state.minus === true) {
        this.setState(
        {numbers:this.state.numbers2-this.state.numbers}
        )
      }else if(this.state.divide === true){
      this.setState({numbers:this.state.numbers2/this.state.numbers})
      }else if(this.state.dual === true){
        this.setState({numbers:this.state.numbers2*this.state.numbers})
        }else if(this.state.plus === true){
         var x = Number(this.state.numbers)
         var y = Number(this.state.numbers2)
         this.setState({numbers:x+y})
        }
    }else if (number === "clear"){
      this.setState({
        numbers: '',
        numbers2: '',
        plus: '',
        minus: '',
        divide:'',
        equls: '',
        dual:''
      })
    }

  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.numbers} />
        <Buttons cal={number => this.calculate(number)} />

      </div>
    );
  }
}


