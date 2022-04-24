import axios from "axios";
import React, { useEffect, useState } from "react"; //CALLED HOOKS, useparams()
import { Link, useParams } from "react-router-dom";
// import CommentList from "./CommentList";

function ShowProductFunctional() {
  //const product = props.prod;
  const params = useParams();

  const [product, setProduct] = useState(null);//returns 2 args--> data, func (data ko update karne wala) //usestate is init state--[]
  const [comment, setComment] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(params);
    const endpoint = `http://localhost:8082/api/function/searchById/${params.id}`;

    axios
      .get(endpoint)
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => {
        console.log("Error from ShowProductDetails");
      });
  }, []);
  //var lat = product.latitude;
  //var long = product.longitude;
  //var querystring = 'q='+lat+','+long;
  //let _url = `https://www.google.com/maps/embed/v1/place?`+querystring;

  //let _url = `https://maps.google.com/maps?q=${lat},${long}&hl=es&z=14&amp;output=embed`
  
  function addComment(){
    // make a backend call
    axios.post(`http://localhost:8082/api/function/comments/`, { id : params.id, comment: query },
     {"Content-Type": "application/json"} )
    setComment("Added Comment Successfully !")
    window.location.reload(false);
  }

  function handleChange(e){
      setQuery(e.target.value);
  }

   
  function checkCommentStatus(c){
    if (c == null ){
      return "No comments available"
    }
    else{
      return c
    }
  }

 

  
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
              <div>
              {product!==null && 
              <table className="table table-hover table-dark" >
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
                    <td>Top Review</td>
                    <td>{ product.reviews.title }</td>
                  </tr>
              
                  <tr>
                    <th scope="row">4</th>
                    <td>Primary Category</td>
                    <td>{ product.primaryCategories }</td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td> Your Recent Comment</td>
                    {/* <td>{ product.comment }</td> */}
                    <td> {checkCommentStatus(product.comment)} </td>
                  </tr>
                </tbody>
              </table>}
              </div>
              
              <div>     
                {product!==null && 
                  <iframe frameBorder="0" width="100%" height="100%"  src={`https://www.google.com/maps/embed/v1/place?key=<Google API Key>&q=${product.latitude},${product.longitude}`}>
                  </iframe>}
              </div>

              <div>
                   
                    <br></br>
                    <br></br>
                    {/* Here take value from the input box and handle hange func needs to be defined and setVar that sends as props */}
                    <input class="form-control form-control-lg"  placeholder="Add comment about this Product" type = "text"
                     value={query}
                     onChange={handleChange}></input> 
                    {/* So whatever I entered in this input box is in setQuery so must pass this as prop */}
                    <br></br>
                    <button type="button" class="btn btn-primary btn-lg btn-block " onClick={addComment} >Add Comment</button>
                    {/* addComment function must do the backend call to insert query and display success msg */}
                    <br></br>
                    <span>{comment}</span>
              </div>
          </div>
      </div>
    </div>
  ); 
}

export default ShowProductFunctional;
