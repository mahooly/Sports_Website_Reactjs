import React from 'react'
import {connect} from 'react-redux';
import fixed_bg from '../../public/images/stadium.png';
import moment from 'jalali-moment';
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const bg = {
    backgroundImage: `url(${fixed_bg})`
};

const NewsPage = (props) => (
    <div className='news-page' style={bg}>
        <div className='news-item'>
            <div className='news-item__content'>
                <h2>{props.article.title}</h2>
                <p>{props.article.text}</p>
                <p className='news-item__date'>{moment(props.article.date).locale('fa').format("DD MMM - HH:mm ")}</p>
                {props.article.tags.map((tag) => {
                    return <p className='news-item__tag' key={tag}>{tag}</p>
                })}
                <p className='news-item__tag'>{props.article.type}</p>
            </div>
            {props.article.image && <img className='news-item__img' src={props.article.image}/>}
        </div>
        <div className='news-page__comment-section'>
            <CommentForm articleID={props.article.id}/>
            <Comments comments={props.comments}/>
        </div>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        article: state.news.find((article) => article.id === props.match.params.id),
        comments: state.comments.filter((comment) => comment.articleID === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewsPage);
