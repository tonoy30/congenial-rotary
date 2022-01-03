import { supabase } from '@lib/supabase/supabase.config';
import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
	const [post, setPost] = useState({ title: '', content: '' });
	const { title, content } = post;
	const createPost = async (event) => {
		event.preventDefault();
		if (title.trim() === '' || content.trim() === '') {
			alert('Please fill in all fields');
			return;
		}
		const { data } = await supabase
			.from('posts')
			.insert([{ title, content }])
			.single();
		setPost({ title: '', content: '' });
		addPost(data);
	};
	return (
		<div className='w-full sm:max-w-md p-5 mx-auto'>
			<h2 className='mb-12 text-center text-5xl font-extrabold'>
				Add Post
			</h2>
			<form onSubmit={createPost}>
				<div className='mb-4'>
					<label className='block mb-1' htmlFor='title'>
						Title
					</label>
					<input
						id='title'
						type='text'
						name='title'
						value={title}
						onChange={(e) =>
							setPost({ ...post, title: e.target.value })
						}
						className='py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
					/>
				</div>
				<div className='mb-4'>
					<label className='block mb-1' htmlFor='content'>
						Content
					</label>
					<input
						id='content'
						type='textarea'
						name='content'
						value={content}
						onChange={(e) =>
							setPost({ ...post, content: e.target.value })
						}
						className='py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
					/>
				</div>
				<div className='mt-6'>
					<button className='w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePost;
