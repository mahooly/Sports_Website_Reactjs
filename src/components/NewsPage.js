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
                <h3>{props.article.title}</h3>
                <p>{moment(props.article.date).locale('fa').format("DD MMM - HH:mm ")}</p>
                {props.article.tags.map((tag) => {
                    return <p key={tag}>{tag}</p>
                })}
                <p>{props.article.text}</p>
            </div>
            {props.article.image && <img className='news-item__img' src={props.article.image}/>}
        </div>
        <CommentForm articleID={props.article.id}/>
        <Comments comments={props.comments}/>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        article: state.news.find((article) => article.id === props.match.params.id),
        comments: state.comments.filter((comment) => comment.articleID === props.match.params.id)
    };
};

export default connect(mapStateToProps)(NewsPage);
