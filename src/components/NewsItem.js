import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'jalali-moment';

const NewsItem = ({ id, title, description, image, date, tags}) => (
    <div className='news-item'>
        {image && <img className='news-item__img' src={image}/>}
        <div className='news-item__content'>
            <Link to={`/news/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{moment(date).locale('fa').format("DD MMM - HH:mm ")}</p>
            {tags.map((tag) => {
                return <p key={tag}>{tag}</p>
            })}
            <p>{description}</p>
        </div>
    </div>
);

export default NewsItem;