import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get('http://localhost:8082/api/function/searchName/batteries') //+this.props.params.name
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
            product: res.data[0] //[{},{}]
        })
      })
      .catch(err => {
        console.log("Error from ShowProductDetails");
      })
  };



  render() {

    const product = this.state.product;
    let Item = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ product.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Manufacturer</td>
            <td>{ product.manufacturer }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Rating</td>
            <td>{ product.rating }</td>
          </tr>
          {/* <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ book.publisher }</td>
          </tr> */}
          {/* <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ book.published_date }</td>
          </tr> */}
          <tr>
            <th scope="row">6</th>
            <td>Primary Category</td>
            <td>{ product.primaryCategories }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowProductDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Product's Record</h1>
              <p className="lead text-center">
                  View Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { Item }
          </div>

          {/* <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${product._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div> */}
          
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showProductDetails;