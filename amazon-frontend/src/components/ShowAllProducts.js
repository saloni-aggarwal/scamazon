import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

class ShowProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/function/searchAll')
      .then(res => {
        console.log("Response from show all products !!!!");
        console.log(res.data);
        this.setState({
          products: res.data //res is array 
        })
      })
      .catch(err =>{
        console.log('Error from ShowProductList');
      })
  };


  render() {
    const prods = this.state.products;
    console.log("PrintProduct: " + prods);
    let prodList;

    if(!prods) {
        prodList = "there is no  record!";
    } else {
        prodList = prods.map((prod, k) =>
        <ProductCard prod ={prod} key={k} />
      );
    }

    return (
      <div className="ShowProductList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Product List</h2>
            </div>

            {/* <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div> */}

          </div>

          <div className="list">
                {prodList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProductList;