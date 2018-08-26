import React,{Component} from 'react';
import '../css/style.css';

class IndentationList extends Component{
	constructor(props) {
        super(props);

        this.state = {
            active: false,
            toggle:"b"
        };
        this.toggleClass=this.toggleClass.bind(this);
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

	generateHTML (){
	let data=this.props.data;
	
	return data.map(repeater =>{
		let key0 = Object.keys(repeater)[0], 
			key1 = Object.keys(repeater)[1],
			repeaterChild = repeater[key1],
			child = Object.keys(repeaterChild), 
			key01 = child[0], key02 = child[1],
			child01 = repeaterChild[key01],
			child02 = repeaterChild[key02],listData;
			/*console.log(repeaterChild[key01]);
			console.log(repeaterChild[key02]);*/

		return listData = 
		<ul>
			<li className={this.state.toggle} onClick={this.toggleClass}>
				{repeater.title } 
				<ul>
				<li>{key1}
					<ul>
					<li> {key01 } 
						<ul>
							<li>{child01[0].file_name}</li>
							<li>{child01[1].file_name}</li>
						</ul>
					</li>
					<li> {key02} 
						<ul>
							<li>{child02[0].file_name}</li>
							<li>{child02[1].file_name}</li>
						</ul>
					</li>
					</ul>
				</li>
				</ul>


			</li>
		</ul>
	
	})
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