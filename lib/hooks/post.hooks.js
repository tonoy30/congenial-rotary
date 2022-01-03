import { supabase } from '@lib/superbase/superbase.config';
import { useEffect, useRef, useState } from 'react';

const useFetchPosts = () => {
	const [posts, setPosts] = useState([]);
	const fetchPosts = useRef(() => {});
	fetchPosts.current = async () => {
		const { data } = await supabase.from('posts').select();
		setPosts(data);
		console.log(posts);
	};

	useEffect(() => {
		fetchPosts.current();
	}, []);
	return [posts, setPosts];
};

export { useFetchPosts };
