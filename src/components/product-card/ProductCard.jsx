import { Link } from 'react-router-dom';
import './ProductCard.styles.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-rating">Rating: {product.rating.rate} / 5 ({product.rating.count})</p>
            <p className="product-price">${product.price}</p>
            <div className="product-card-actions">
                <button onClick={() => onEdit(product)} className="edit-button">Edit</button>
                <button onClick={() => onDelete(product)} className="delete-button">Delete</button>
                <Link to={`/product/${product.id}`} className="view-details-button">
                    View Detail
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;