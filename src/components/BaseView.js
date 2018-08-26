import React,{Component} from 'react';
import TopHeader from './TopHeader';
import LeftNavigation from './LeftNavigation';
import ContentView from './ContentView';

class BaseView extends Component{
render(){
	var divStyle = {
	borderStyle: 'solid',
	height:'500px',
	overflow: 'scroll'

	};
	return(
		<div>

		<div className="col-md-12">
        <TopHeader/>
        <div className="row">
            <div className="col-md-3" style={divStyle}><LeftNavigation/></div>
            <div className="col-md-9" style={divStyle}><ContentView/></div>
        </div>
    </div>
		</div>
		)
}
}

export default BaseView;