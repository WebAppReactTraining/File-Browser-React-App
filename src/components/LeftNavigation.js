import React,{Component} from 'react';
import {Card,CardBody} from 'mdbreact';
import Data from '../resources/long_game_tree.json';
import IndentationList from './IndentationList';

class LeftNavigation extends Component{

 handleClick(e){
    console.log(e.target.title);
  }

render(){

	return(
		<div >
			<IndentationList data={Data}/>
		</div>
		)
}
}

export default LeftNavigation;