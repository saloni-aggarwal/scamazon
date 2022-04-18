import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = (props) => {
    const  product  = props.prod;

    return(
        <div className="card-container">
            {/* <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" /> */}
            <img src = {`${product.imageURLs}`} alt= "" style = { { maxWidth: '100%' , height: 'auto'} } /> 
            <div className="desc">
                <h2>
                    <Link to={`/show/${product._id}`}>
                        { product.name }
                    </Link>
                </h2>
                <h3>{product.manufacturer}</h3>
                <p>{product.primaryCategories}</p>
                {/* <p>{product.location}</p> */}
            </div>
        </div>
    )
};

export default ProductCard;