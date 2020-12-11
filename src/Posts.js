import React, { useState, useEffect } from 'react'
import ImageUpload from './ImageUpload';
import './Posts.css';
import firebase from 'firebase';
import { db } from './firebase';
import Post from './Post.js';
import { useHistory } from 'react-router-dom';

function Posts({ user }) {
    const history = useHistory("");
    const [posts, setPosts] = useState([]);

    console.log(user)

    if (user === undefined) {
        history.push("/login")
    }

    // useEffect(() => {
    //     db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    //         setPosts(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             post: doc.data(),
    //         })));
    //     })
    // }, []);

    return (
        <div className="posts">
            <ImageUpload username="shivani dinde" />

             {
            //     posts.map(({ id, post }) => (
            //         <Post key={id} postId={id} origuser={user?.displayName} username={post.username} userId={user.uid} caption={post.caption} imageUrl={post.imageUrl} noLikes={post.noLikes} />
            //     ))
             }
        <Post key="1122" postId="post001" origuser="shivani dinde" username="shivani dinde" userId="shiavanidinde125" caption="journey to nature!!" imageUrl="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg" noLikes="512" />
        <Post key="1122" postId="post001" origuser="rishikesh vanjare" username="shivani dinde" userId="shiavanidinde125" caption="I have started startup with support of greyatom. Support me by purchasing my software products" noLikes="100" />    
        <Post key="1122" postId="post001" origuser="rishikesh vanjare" username="shivani dinde" userId="shiavanidinde125" caption="Avengers Home coming..." imageUrl="https://sm.mashable.com/mashable_in/seo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_5z9w.jpg" noLikes="658" />
        </div>
    )
}

export default Posts;

