import React,{Component} from 'react';

class IndentationList extends Component{

	generateHTML (){
		let data=this.props.data, listHTML='';
		if(data != null && data.length > 0){
			data.map(repeater => {
				let temp, objectKeys = Object.keys(repeater);
				console.log(objectKeys);
				if(objectKeys != null & objectKeys.length > 0){
					let key0 = objectKeys[0], key1 = objectKeys[1];
					
					let repeaterChild = repeater[key1];
					let chld = Object.keys(repeaterChild), key01 = chld[0], key02 = chld[1];
					listHTML = <ul> <li>{repeater.title } <ul>{key1}  <li> {key01 } </li><li>{key02}  </li></ul></li></ul>;
				}
			});
		}
		return listHTML;
	}

	render(){
		
		return(
			<div>
				{this.generateHTML()}
			</div>
		);
	}
}
export default IndentationList;