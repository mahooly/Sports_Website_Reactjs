import React from 'react';
import NewsItem from './NewsItem'
import {connect} from 'react-redux'

const News = (props) => (
    <div className='news'>
        {props.news.map((article) => {
            return <NewsItem key={article.id} {...article}/>
        })}
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        news: (props.news ? props.news : state.news).reverse()
    };
};

export default connect(mapStateToProps)(News);
