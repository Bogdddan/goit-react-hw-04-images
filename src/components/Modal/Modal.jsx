import { useEffect } from "react";
import css from './Modal.module.css';

export function Modal({ closeModal, modalImage }) {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

    return (
      <div onClick={this.handleBackdropClick} className={css.overlay}>
        <div className={css.modal}>
          <button onClick={this.props.closeModal} className={css.closeButton}>X</button>
          <img src={this.props.modalImage} alt="modalImage" />
        </div>
      </div>
    );
  
}