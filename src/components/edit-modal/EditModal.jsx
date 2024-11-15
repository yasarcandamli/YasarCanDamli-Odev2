import { useState } from 'react';
import './EditModal.styles.css';

const EditModal = ({ product, closeModal, onSave }) => {
    if (!product) return null;

    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const handleSave = () => {
        onSave({ ...product, title, description, price });
    };

    return (
        <div className="edit-modal">
            <div className="modal-content">
                <h2>Edit Product</h2>
                <form>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Description</label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <button className='edit-modal-save' type="button" onClick={handleSave}>Save</button>
                    <button className='edit-modal-cancel' type="button" onClick={closeModal}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditModal;