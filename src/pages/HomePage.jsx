import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import ProductList from '../components/product-list/ProductList';
import EditModal from '../components/edit-modal/EditModal';
import DeleteModal from '../components/delete-modal/DeleteModal';
import Loading from '../components/loading/Loading';
import './HomePage.styles.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        minPrice: '',
        maxPrice: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
                alert('Error fetching products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsEditModalOpen(true);
    };

    const handleSave = (updatedProduct) => {
        setProducts(products.map((prod) =>
            prod.id === updatedProduct.id ? updatedProduct : prod
        ));
        setIsEditModalOpen(false);
        setSelectedProduct(null);
    };

    const handleDelete = (product) => {
        setSelectedProduct(product);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        setProducts(products.filter((prod) => prod.id !== selectedProduct.id));
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase());
        const matchesCategory = filters.category ? product.category === filters.category : true;
        const matchesMinPrice = filters.minPrice ? product.price >= parseFloat(filters.minPrice) : true;
        const matchesMaxPrice = filters.maxPrice ? product.price <= parseFloat(filters.maxPrice) : true;

        return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
    });

    return (
        <div>
            <Header filters={filters} setFilters={setFilters} />
            {loading ? (
                <Loading />
            ) : (
                <ProductList
                    products={filteredProducts}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
            {isEditModalOpen && selectedProduct && (
                <EditModal
                    product={selectedProduct}
                    closeModal={() => setIsEditModalOpen(false)}
                    onSave={handleSave}
                />
            )}
            {isDeleteModalOpen && selectedProduct && (
                <DeleteModal
                    product={selectedProduct}
                    closeModal={() => setIsDeleteModalOpen(false)}
                    onDelete={confirmDelete}
                />
            )}
        </div>
    );
};

export default HomePage;
