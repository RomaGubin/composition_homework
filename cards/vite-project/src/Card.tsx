import React from 'react';

interface CardProps {
  title?: string;
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  header?: string;
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, imgSrc, imgAlt, header, link, linkText, children }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imgSrc && <img src={imgSrc} className="card-img-top" alt={imgAlt || 'Card image'} />}
      
      {header && <div className="card-header">{header}</div>}

      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}

        {text && <p className="card-text">{text}</p>}

        {children}

        {link && linkText && (
          <a href={link} className="btn btn-primary">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
