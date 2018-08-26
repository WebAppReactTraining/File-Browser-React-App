import React,{Component} from 'react';
import {Card,CardBody} from 'mdbreact';
import Data from '../resources/long_game_tree.json'

class LeftNavigation extends Component{

 handleClick(e){
    console.log(e.target.title);
  }

render(){

	return(
		<div >
		<ul>{Data.map(repeater =><li onClick={this.handleClick}  title={repeater.title}>{repeater.title}<ul><li>Game play resources</li></ul></li>)}</ul>
		</div>
		)
}
}

export default LeftNavigation;