import React from "react";
import css from './ImageGalley.module.css'

export function ImageGalleryItem ({ showModal , smallImg , alt }) {
    return (
      <li className={css.ImgGalleryli} onClick={showModal}>
        <img className={css.photo} src={smallImg} alt={alt} />
      </li>
    );
}