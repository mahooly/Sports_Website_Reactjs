import React from 'react'
import {connect} from 'react-redux';

const NewsPage = (props) => (
    <div>
        <h3>{props.article.title}</h3>
        <p>{props.article.date}</p>
        {props.article.tags.map((tag) => {
            return <p key={tag}>{tag}</p>
        })}
        {props.article.image && <img src={props.article.image}/>}
        <p>{props.article.text}</p>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        article: state.news.find((article) => article.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewsPage);
