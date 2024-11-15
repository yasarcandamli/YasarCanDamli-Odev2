import './DeleteModal.styles.css';

const DeleteModal = ({ product, closeModal, onDelete }) => (
    <div className="delete-modal">
        <div className="modal-content">
            <h2>Are you sure you want to delete this product?</h2>
            <p>{product.title}</p>
            <button className='delete-modal-confirm' onClick={onDelete}>Yes, Delete</button>
            <button className='delete-modal-cancel' onClick={closeModal}>Cancel</button>
        </div>
    </div>
);

export default DeleteModal;