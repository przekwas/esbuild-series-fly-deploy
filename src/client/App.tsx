import React, { useState, useEffect } from 'react';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

interface AppProps {}

const App = (props: AppProps) => {
	const [data, setData] = useState('');

	useEffect(() => {
		fetch(BASE_URL + '/api/hello')
			.then(res => res.json())
			.then(data => setData(data.message))
			.catch(e => console.log('[fetch erorr]', e));
	}, []);

	return (
		<div className="mx-auto mt-5 w-25">
			<div className="alert alert-info text-center">Hello {data}</div>
		</div>
	);
};

export default App;