import React, { Component } from 'react';
import './App.css';
import Buttons from './components/buttons';
import { Grid ,Header, Icon,Segment,Input} from 'semantic-ui-react';


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
      <div style={divStyle} className="App">
        <Grid.Row columns={1}>
          <Grid.Column>
      <Header style={{padding: '0px 0px 0px 10%'}} as='h2'>
    <Icon name='calculator' />
    <Header.Content>
     Calculator
      <Header.Subheader>
        Manage your Numbers
      </Header.Subheader>
    </Header.Content>
  </Header>
  </Grid.Column>
  </Grid.Row>
      <Segment  inverted>
        <Input style={intStyle} type="text" value={this.state.numbers} />
        <Buttons cal={number => this.calculate(number)} />
          </Segment>

      </div>
    );
  }
}

const divStyle ={
  margin: '100px 500px ',
  minWidth: "200px",
  maxWidth: "350px"  
  
  
}
 const intStyle ={
  margin: "0px 0px 20px 0px",
 }