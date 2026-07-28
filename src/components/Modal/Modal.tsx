interface ModalProps {
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    if(!isOpen) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                {children}
                <button className="modal-close" onClick={onClose}>
                    ✖
                </button>
            </div>

        </div>
    );
};


export default Modal;