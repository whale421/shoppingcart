import React,{Fragment,Component }from 'react';
import logo from './logo.svg';
import './App.css';

const numbers = [
  "❥❤",
  "❥❤",
  "❥❤",
  "❥❤",
  "❥❤",
  "❥❤",
  "❥❤",
  "❥❤",
  ];  
class shoppingcart extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  NumberList(number) {
    const numbers = number;
    const listItems = (numbers || []).map((number) =>
      <div class="inner" key={number.toString()}>
        <div class="word">
            {number} 
        </div>
        <div class="keypress1">
            <button>+</button>数量<button>-</button>
        </div>
        <div class="keypress2">
            <button>删除</button>
        </div>
      </div>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  render() { 
    return ( 
      <div class="periphery">
        {this.NumberList(numbers)}
      </div>
     );
  }
}
 
export default shoppingcart;

