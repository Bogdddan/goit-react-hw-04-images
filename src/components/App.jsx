import { useState , useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {Searchbar} from './SearchBar/SearchBar';
import { Modal } from "./Modal/Modal";
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './Button/Button.module.css'


export function App (){
  // state = {
  //   searchQuery: '',
  //   isShowModal: false,
  //   modalImage: '',
  // };
  const [ searchQuery , setSearchQuery ] = useState('')
  const [ isShowModal , setIsShowModal ] = useState(false)
  const [ modalImage , setModalImage ] = useState('')


  const handleFormSubmit = searchQuery => {
    setSearchQuery( searchQuery );
  };

  const showModal = largeImageURL => {
    setIsShowModal({ isShowModal: true });
    // modalImage: largeImageURL
    setModalImage( largeImageURL )
  };

  const closeModal = () => {
    setIsShowModal({ isShowModal: false });
  };

    return (
      <>
        <div className={css.container}>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery
          showModal={showModal}
          searchQuery={searchQuery}
        />
        {isShowModal && (
          <Modal
            closeModal={closeModal}
            modalImage={modalImage}
          />
        )}
        <ToastContainer className={css.toaster} autoClose={1000} theme="colored" />
        </div>
      </>
    );
}
