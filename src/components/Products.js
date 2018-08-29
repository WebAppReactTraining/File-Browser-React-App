import React,{Component} from 'react';
import Data from '../resources/long_game_tree.json';
import collapseArrow from '../images/collapse-arrow.png';


class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.products = Data;
  }


//delete json value by id
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

// add json value by id
  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      //add the aatributes
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  render() {
    return (
      <div>
        <ProductTable onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} />
      </div>
    );

  }

}
export default Products;




class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;

    var product = this.props.products.map(function(product) {
      return (<ProductRow product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
  

    return (
      <div>
      <button type="button" onClick={this.props.onRowAdd} >Add</button>
        <table>
          <tbody>
            {product}
          </tbody>
        </table>
      </div>
    );

  }

}



class ProductRow extends React.Component {

  imageClick (repeater) {
      console.log("comes here " + repeater.title);  
    };

  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr >
      <td onClick={()=>this.imageClick(this.props.product)}>
      <img src={collapseArrow} />
      <span>{this.props.product.title }</span>
      </td>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}


