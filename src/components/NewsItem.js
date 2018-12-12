import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'jalali-moment';

const NewsItem = ({id, title, description, image, date, tags, type}) => (
    <div className='news-item'>
        {image && <img className='news-item__img' src={image}/>}
        <div className='news-item__content'>
            <Link to={`/news/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <p className='news-item__date'>{moment(date).locale('fa').format("DD MMM - HH:mm ")}</p>
            <div className='news-item__tag-holder'>
                {tags.map((tag) => {
                    return <p className='news-item__tag' key={tag}>{tag}</p>
                })}
                <p className='news-item__tag'>{type}</p>
            </div>
        </div>
    </div>
);

export default NewsItem;