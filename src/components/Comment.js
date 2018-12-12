import React from 'react';

const Comment = (props) => (
    <article className="news-page__comment">
        <div className='comment-header'>
            <img className='logo' src="https://img.freepik.com/free-icon/bag-on-head_318-109407.jpg?size=338&ext=jpg" alt="Avatar"/>
            <strong style={{paddingTop: '30px'}}>{props.comment.name}</strong>
        </div>
        <div className="comment-content">{props.comment.text}</div>
    </article>
);


export default Comment;