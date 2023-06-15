import { useEffect } from "react";
import css from './Modal.module.css';

export function Modal ( {closeModal , modalImage} ) {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }


  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  })

  useEffect(()=> {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };


    return (
      <div onClick={handleBackdropClick} className={css.overlay}>
        <div className={css.modal}>
          <button onClick={closeModal} className={css.closeButton}>X</button>
          <img src={modalImage} alt="modalImage" />
        </div>
      </div>
    );

}