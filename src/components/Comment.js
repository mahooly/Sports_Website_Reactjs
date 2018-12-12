import React from 'react';

const Comment = (props) => (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://img.freepik.com/free-icon/bag-on-head_318-109407.jpg?size=338&ext=jpg" alt="Avatar" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.comment.name}</strong>
                            <br />
                            {props.comment.text}
                        </p>
                    </div>
                </div>
            </article>
        )


export default Comment;