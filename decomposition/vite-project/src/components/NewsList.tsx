import React from 'react';
import NewsItem from './NewsItem';

// Компонент для отображения списка новостей.

const NewsList: React.FC = () => {
  const news = [
    { icon: "🌐", text: "Новость 1", link: "#" },
    { icon: "📰", text: "Новость 2", link: "#" },
    { icon: "🔥", text: "Новость 3", link: "#" }
  ];

  return (
    <div>
      {news.map((item, index) => (
        <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};

export default NewsList;
