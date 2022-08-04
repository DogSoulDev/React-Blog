import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
	const [postLists, setPostLists] = useState([]);
	const postCollectionsRef = collection(db, "posts");

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postCollectionsRef);
			setPostLists(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
		};
    getPosts();
     // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deletePost = async (id) => {
		const postDoc = doc(db, "posts", id);
		await deleteDoc(postDoc);
	};
	return (
		<div className='homePage'>
			{postLists.map((post, index) => {
				return (
					<div key={index} className='post'>
						<div className='postHeader'>
							<div className='title'>
								<h1> {post.title}</h1>
							</div>
							<div className='deletePost'>
								{isAuth && post.author.id === auth.currentUser.uid && (
									<button
										onClick={() => {
											deletePost(post.id);
										}}>
										&#128465;
									</button>
								)}
							</div>
						</div>
						<div className='postTextContainer'> {post.postText} </div>
						<h3>@{post.author?.name}</h3>
						{/* {console.log(post.author?.name)} */}
					</div>
				);
			})}
		</div>
	);
}

export default Home;
