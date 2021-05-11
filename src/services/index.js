import Delete from './delete';
import Get from './get';
import Post from './post';
import Put from './put';

// DELETE
const deletePostBlog = (data, id) =>
	Delete(`posts/${id}`, false, data);

// PUT
const putPostBlog = (data, id) => Put(`posts/${id}`, false, data);

// POST
const postNewBlog = (data) => Post('posts', false, data);

// GET
const getBlogPost = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
	deletePostBlog,
	getBlogPost,
	postNewBlog,
	putPostBlog,
	getComments,
};

export default API;
