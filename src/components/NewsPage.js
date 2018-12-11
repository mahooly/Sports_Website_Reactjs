import React from 'react'
import {connect} from 'react-redux';
import fixed_bg from '../../public/images/stadium.png';

const bg = {
    backgroundImage: `url(${fixed_bg})`
};

const NewsPage = (props) => (
    <div className='news-page' style={bg}>
        <div className='news'>
            <div className='news-item__content'>
                <h3>{props.article.title}</h3>
                <p>{props.article.date}</p>
                {props.article.tags.map((tag) => {
                    return <p key={tag}>{tag}</p>
                })}
                <p>{props.article.text}</p>
            </div>
            {props.article.image && <img className='news-item__img' src={props.article.image}/>}
        </div>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        article: state.news.find((article) => article.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewsPage);
