import React from 'react';
import moment from 'moment';
import {addComment} from "../actions/comments";
import {connect} from 'react-redux';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
    }

    addComment(e) {
        e.preventDefault();
        const comment = e.target.elements.comment.value.trim();
        const name = e.target.elements.name.value.trim();

        if (name && comment) {
            const commentObject = { name: name, text: comment, articleID: this.props.articleID, date: moment().valueOf()};

            this.props.dispatch(addComment(commentObject));

            e.target.elements.comment.value = '';
            e.target.elements.name.value = '';
        }
    }

    render() {
        return (
            <div>
                <h3 className="title">نظر شما:</h3>
                <form onSubmit={this.addComment}>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" name="name" placeholder="نام شما"/>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" name="comment" placeholder="نظر خود را بنویسید"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="nav button-nav">ثبت نظر</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(CommentForm);