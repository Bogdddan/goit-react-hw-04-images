import React from 'react';
import css from './Button.module.css';


export function Button ({ onFindMore }) {
    return (
        <button
        className={css.buttonLoadMore}
        onClick={onFindMore}
        type="button"
      >
        Load more
      </button>
    );
}