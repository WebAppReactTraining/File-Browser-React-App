import React,{Component} from 'react';
import '../css/style.css';
import collapseArrow from '../images/collapse-arrow.png';

class IndentationList extends Component{
	constructor(props) {
        super(props);

        this.state = {
            active: false,
            toggle:"b"
        };
        this.toggleClass=this.toggleClass.bind(this);
        this.dataInside=this.dataInside.bind(this);
    }

    toggleClass() {
    	const currentState = this.state.active;
    	console.log(currentState);
    	if(currentState){
    		this.setState({ active:false,toggle: "a" });
    	}else{
    		this.setState({ active:true,toggle: "b" });

    	} 
    };

    imageClick (repeater) {
    	debugger;
    	console.log("comes here " + repeater.title);
    	this.dataInside();
  
    };
    dataInside(){
    	var list1;
    	return list1=<tr>
				<td>
					fjhfjhjfhS
				</td>
			</tr>
    }

	generateHTML (){
	let data=this.props.data,list;	
	return data.map(repeater =>{ 
			return list=<tr>
				<td  onClick={()=>this.imageClick(repeater)}>
					<img src={collapseArrow} />
					<span>{repeater.title }</span>
					{this.dataInside}
				</td>
			</tr>	
	})
	}

	render(){
		
		return(
			<div>
				<table>
					<tbody>
						{this.generateHTML()}
					</tbody>
				</table>
			</div>
		);
	}
}
export default IndentationList;