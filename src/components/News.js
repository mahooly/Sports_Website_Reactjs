import React from 'react';
import NewsItem from './NewsItem'
import {connect} from 'react-redux'

const News = (props) => (
    <div>
        <h2>اخبار</h2>
        {props.news.map((article) => {
            return <NewsItem key={article.id} {...article}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

export default connect(mapStateToProps)(News);
