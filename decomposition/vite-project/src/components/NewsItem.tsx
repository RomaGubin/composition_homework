import React from 'react';

interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

//Компонент для отображения отдельной новости с иконкой, текстом и ссылкой.

const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div>
      <span>{icon}</span>
      <a href={link}>{text}</a>
    </div>
  );
};

export default NewsItem;
