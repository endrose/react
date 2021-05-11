import axios from 'axios';
import { OnlinePath, RootPath } from './config';

const Delete = (path, root) => {
	const promise = new Promise((resolve, reject) => {
		//
		axios.delete(`${root ? OnlinePath : RootPath}/${path}`).then(
			(result) => {
				resolve(result);
			},
			(err) => {
				reject(err);
				alert(err);
			},
		);
	});

	return promise;
};

export default Delete;
