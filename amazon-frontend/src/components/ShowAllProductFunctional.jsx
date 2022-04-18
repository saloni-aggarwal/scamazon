import ProductCard from './ProductCard';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowAllProductFunctional() {
    const [products, setProducts] = useState([]);
    const [resourceType, setResourceType] = useState("0");
    const [query, setQuery] = useState("");
    const [categoryName, setCategory] = useState("");
    const [zipName, setZip] = useState("");
    
    const navigate = useNavigate();
    //const params = useParams()

    const fetchData= () =>{
      const searchName = `http://localhost:8082/api/function/searchName/${query}`;
      console.log(searchName)
     return axios.get(searchName);
       
    }

    const fetchCategory= () =>{
      const searchCat = `http://localhost:8082/api/function/searchCategory/${categoryName}`;
      console.log(searchCat)
     return axios.get(searchCat);
       
    }

    const fetchZip= () =>{
      const searchZip = `http://localhost:8082/api/function/searchByZip/${zipName}`;
      console.log(searchZip)
     return axios.get(searchZip);
       
    }
    useEffect(() => {
        //console.log(params);
        console.log("resorce changed!");
         const endpoint = `http://localhost:8082/api/function/searchAll`;
        axios.get(endpoint)
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            console.log("Error from ShowProductDetails");
          });
        

      }, [resourceType]);



      //whenevr val inside the above array(empty) change, use effect changes, i.e side effect takes place
    
    function findbyName(){
          //setResourceType(prevItem => prevItem + 1)
          setResourceType("Name Find!")
          fetchData().then((res) => {
            setProducts(res.data);
           
          }
          )
          .catch((err) => {
            console.log("Error from findByName");
          });
    }

    function handleChange(e){
      setQuery(e.target.value);
    }

    function quitPage(){
      navigate('/thanku', { replace: true })
    }

    function handleCategoryChange(e){
      setCategory(e.target.value); 
    }

    function handleZipChange(e){
      setZip(e.target.value); 
    }

    function findCategory(){
      setResourceType('Category Button')
      fetchCategory().then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error from findCategory");
      });
    }

    function findByZip(){
      setResourceType('Zip Button')
      // setResourceType('Category Button')
      fetchZip().then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error from findCategory");
      });
    }
  return (
  <div>
    <h3 className="display-4 text-center"> Scamazon App </h3>
    <div className="row pb-1">
          <div className="input-group col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name"

                    value={query}
                    onChange={handleChange}
                  />
                  
                  <div className="input-group-append">
                    <button
                      className="btn btn-dark"
                      type="button"
                      
                      onClick={findbyName}
                    >
                     
                      Search
                    </button>
                  </div>
          </div>
          <div className="input-group col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by zip"
                        value={zipName}
                        onChange={handleZipChange}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-dark"
                          type="button"
                          onClick={findByZip}
                        >
                          Search
                        </button>
                      </div>
          </div>
          <div className="input-group col-lg-4">
                      
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Category"
                        value={categoryName}
                        onChange={handleCategoryChange}
                      />
            
            <div className="input-group-append">
                <button
                  className="btn btn-dark"
                  type="button"

                  onClick={findCategory}
                >
                  Search
                </button>
              </div>

              

          </div>
          
  </div>
  
  {/* <h1>{resourceType}</h1> */}
  <center>
          <button
                  className="btn btn-outline-primary"
                  type="button"
                  class = "btn btn-danger"
                  onClick={quitPage}
                >
                  Quit
          </button>
  </center>

  <div className="ShowProductList">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br />
          <h4 className="display-5 text-center">Product List</h4>
        </div>

       </div>

      <div className="list">
         { products.map((product, k) =>
          <ProductCard prod = {product} key={k} /> )} 

      </div>
    </div>
  </div>
  </div>

 
  )
}

export default ShowAllProductFunctional
