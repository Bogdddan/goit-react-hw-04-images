import { useState } from "react";
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export function Searchbar(onSubmit) {
    // state = {
    //   searchQuery: '',
    // };
    const [ searchQuery , setSearchQuery ] = useState('');
  
    const handleQueryChange = event => {
      setSearchQuery({ searchQuery: event.currentTarget.value.toLowerCase() });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      if (searchQuery.trim() === '') {
        toast.error('Enter a keyword');
        return;
      }
      onSubmit(searchQuery);
      setSearchQuery({ searchQuery: '' });
    };
  
      return (
        <div onSubmit={handleSubmit} className="searchbar">
          <form className={css.form}>
            <input
              onChange={handleQueryChange}
              value={searchQuery}
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit" className={css.button}>
              <span className="button-label">Search</span>
            </button>
          </form>
        </div>
      );
  }