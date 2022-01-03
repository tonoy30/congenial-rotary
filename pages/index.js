import CreatePost from '@components/posts/CreatePost';
import Post from '@components/posts/Post';
import { useFetchPosts } from '@lib/hooks/post.hooks';
import Head from 'next/head';

const Index = () => {
	const [posts, setPosts] = useFetchPosts();
	const addPost = (post) => {
		setPosts([...posts, post]);
	};
	return (
		<div className='w-full min-h-screen bg-gray-50'>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<CreatePost addPost={addPost} />
				{posts.map((post) => (
					<Post
						key={post.id}
						title={post.title}
						content={post.content}
					/>
				))}
			</main>
		</div>
	);
};
export default Index;
