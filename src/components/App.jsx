import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {Searchbar} from './SearchBar/SearchBar';
import { Modal } from "./Modal/Modal";
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './Button/Button.module.css'


export function App () {
  // state = {
  //   searchQuery: '',
  //   isShowModal: false,
  //   modalImage: '',
  // };
  const [ searchQuery , setSearchQuery] = useState('');
  const [ isShowModal , setisShowModal ] = useState(false);
  const [ modalImage , setmodalImage ] = useState('');

  const handleFormSubmit = searchQuery => {
    setSearchQuery( searchQuery );
  };

  const showModal = largeImageURL => {
    // this.setState({ isShowModal: true, modalImage: largeImageURL });
    setisShowModal({isShowModal : true})
    setmodalImage( {modalImage : largeImageURL} )

  };

  const closeModal = () => {
    // this.setState({ isShowModal: false });
    setisShowModal( {isShowModal : false} )
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
