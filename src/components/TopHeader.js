import React,{Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class TopHeader extends Component{
render(){
	return(
		<div >
			<Navbar color="indigo" dark>
				<NavbarBrand>
						SumoLogic
				</NavbarBrand>
			</Navbar>
		</div>
		)
}
}

export default TopHeader;