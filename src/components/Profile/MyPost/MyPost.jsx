import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';
import {reduxForm} from 'redux-form';
import MyPostForm from './MyPostForm';


let MyNewPost = reduxForm({
    form: 'newpost'
})(MyPostForm)


const MyPost = React.memo(props => {
    console.log("RENDER");

    let Posts = props.postsData.map(posts => (<Post message={posts.message} like={posts.like}/>));

    let onSubmit = (formData) => {

        props.onAddPosts(formData.newPost);
    }

    return (
        <div className={classes.discription_block}>
            <h3>
                My posts
            </h3>
            <div className={classes.discription_block}>
                <MyNewPost onSubmit={onSubmit}/>
            </div>
            <div className={classes.posts}>

                {Posts}

            </div>

        </div>
    );

});


export default MyPost;
