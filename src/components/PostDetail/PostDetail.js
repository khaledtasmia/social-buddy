import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])

    const {name} = comments;

    return (
        <div>
            <h1>Number of Comments: {comments.length}</h1>
            {
                comments.map( comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;