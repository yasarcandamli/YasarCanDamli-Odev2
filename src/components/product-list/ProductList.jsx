import ProductCard from '../product-card/ProductCard';
import './ProductList.styles.css';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onEdit={() => onEdit(product)}
                    onDelete={() => onDelete(product)}
                />
            ))}
        </div>
    );
};

export default ProductList;