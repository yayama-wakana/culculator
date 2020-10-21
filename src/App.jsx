import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {count:0};
    this.countUp = this.countUp.bind(this);
    this.countClr = this.countClr.bind(this);
  }

  alertPopup() {
    notification.alert('error');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div>
          Result: {this.state.count}
        </div>
        <div>
          <Button onClick={() => this.countUp(7)}>7</Button>
          <Button onClick={() => this.countUp(8)}>8</Button>
          <Button onClick={() => this.countUp(9)}>9</Button>
        </div>
        <Button onClick={() => this.countUp(4)}>4</Button>
        <Button onClick={() => this.countUp(5)}>5</Button>
        <Button onClick={() => this.countUp(6)}>6</Button>
        <div>
          <Button onClick={() => this.countUp(1)}>1</Button>
          <Button onClick={() => this.countUp(2)}>2</Button>
          <Button onClick={() => this.countUp(3)}>3</Button>
        </div>
        <div>
          <Button onClick={() => this.countUp(0)}>0</Button>
          <Button onClick={() => this.countClr()}>clr</Button>
        </div>

      </Page>
    );
  }

  ///数字キーを押されたときの処理
  
  countUp(value){
    if(this.state.count <= 9999999)
      this.setState({count:this.state.count*10+value});
    
    else 
      this.alertPopup();
  }

  //クリアキーを押されたときの処理
  countClr(){
    this.setState({count:0});
  }

 
}
