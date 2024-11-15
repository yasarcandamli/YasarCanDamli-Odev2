import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './DetailPage.styles.css';

const DetailPage = () => {
    const { id } = useParams(); // URL'deki ürün ID'sini alır
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!product) {
        return <div className="error">Product not found</div>;
    }

    return (
        <div className="detail-page">
            <div className="detail-container">
                <img src={product.image} alt={product.title} className="product-detail-image" />
                <h1 className='product-detail-title'>{product.title}</h1>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-rating">Rating: {product.rating.rate} / 5 ({product.rating.count})</p>
                <p className="product-detail-price">${product.price}</p>
                <button className="back-button" onClick={() => window.history.back()}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default DetailPage;