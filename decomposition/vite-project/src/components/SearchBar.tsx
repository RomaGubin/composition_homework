import React from 'react';

//Компонент для отображения строки поиска.

const SearchBar: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="Поиск в интернете" />
      <button>Найти</button>
    </div>
  );
};

export default SearchBar;
