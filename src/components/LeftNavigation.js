import React,{Component} from 'react';
import Data from '../resources/long_game_tree.json';
import IndentationList from './IndentationList';
import Products from './Products';

class LeftNavigation extends Component{

 handleClick(e){
    console.log(e.target.title);
  }

render(){

	return(
		<div >
			<Products/>
		</div>
		)
}
}

export default LeftNavigation;