import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

//Основной компонент, который объединяет все блоки интерфейса.

const App: React.FC = () => {
  return (
    <div>
      <Header />        {/* Шапка сайта */}
      <SearchBar />     {/* Строка поиска */}
      <NewsList />      {/* Список новостей */}
      <Footer />        {/* Футер */}
    </div>
  );
};

export default App;
