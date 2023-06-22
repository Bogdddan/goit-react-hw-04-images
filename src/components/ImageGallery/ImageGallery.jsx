import React, { useState, useEffect, useRef, useCallback } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { fetchGalleryImg } from '../Api/Api';
import css from './imageGallery.module.css';

export const ImageGallery = (props) => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const prevSearchQuery = useRef('');

  const fetchImages = useCallback(() => {
    setLoading(true);

    fetchGalleryImg(searchQuery, page)
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          showErrorMsg();
          setHiddenBtn(true);
        } else {
          setImages((prevImages) => (prevImages ? [...prevImages, ...hits] : hits));
        }
        if (12 * page >= totalHits) {
          setHiddenBtn(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, page]);

  useEffect(() => {
    if (prevSearchQuery.current !== props.searchQuery) {
      setLoading(true);
      setPage(1);
      setHiddenBtn(false);
      setSearchQuery(props.searchQuery);
    }
    prevSearchQuery.current = props.searchQuery;
  }, [props.searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchImages();
    }
  }, [searchQuery, fetchImages]);

  const showErrorMsg = () => {
    toast.error(`За вашим результатом нічого не знайдено`);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const isButtonDisabled = !images || hiddenBtn;

  return (
    <>
      {loading && <Loader />}

      {images && (
        <ul className={css.imageGalleryUl}>
          {images.map((image) => (
            <ImageGalleryItem
              showModal={() => props.showModal(image.largeImageURL)}
              key={image.id}
              smallImg={image.webformatURL}
              alt={image.tags}
            />
          ))}
        </ul>
      )}

      {images && !hiddenBtn && <Button onFindMore={loadMoreImages} disabled={isButtonDisabled} />}
    </>
  );
};
