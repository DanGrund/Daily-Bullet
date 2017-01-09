import React from 'react'

const SearchBar = ({ searchTasks }) => {
  return (
    <input
      className = "searchInput"
      type='text'
      placeholder='Search through your tasks...'
      onChange={(e) => searchTasks(e.target.value)}
    />
  )
}

export default SearchBar;
