import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ id, title, description, image, date }) => (
    <div>
        <Link to={`/news/${id}`}>
            <h3>{title}</h3>
        </Link>
        <p>{date}</p>
        <p>{description}</p>
    </div>
);

export default NewsItem;