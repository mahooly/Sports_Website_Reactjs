import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ id, title, description, image, date, tags}) => (
    <div className='news-item'>
        <div className='news-item__content'>
            <Link to={`/news/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{date}</p>
            {tags.map((tag) => {
                return <p key={tag}>{tag}</p>
            })}
            <p>{description}</p>
        </div>
        <div className='news-item__img'>
            {image && <img src={image}/>}
        </div>
    </div>
);

export default NewsItem;