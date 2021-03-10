import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h3>{name}</h3>
            <h5>Email: {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comment;