import axios from 'axios';
import { checkData, dataFormatError, hitokotoData, hitokotoDefault, hitokotoList } from '../func';

export const getHitokotoDefault = async (id?: number): Promise<hitokotoData<hitokotoDefault>> => {
	const data = (
		await axios.get(
			'https://hotaru.icu/api/hitokoto/v2/',
			id
				? {
						params: {
							id,
						},
				  }
				: undefined,
		)
	).data;
	if (!checkData<hitokotoDefault>(data)) {
		dataFormatError();
		throw new Error('Data format is error');
	}
	return data;
};

export const getHitokotoList = async (page: number = 1, limit: number = 20): Promise<hitokotoData<hitokotoList>> => {
	const data = (
		await axios.get('https://hotaru.icu/api/hitokoto/v2/', {
			params: { op: 'list', page, limit },
		})
	).data;
	if (!checkData<hitokotoList>(data)) {
		dataFormatError();
		throw new Error('Data format is error');
	}
	return data;
};

export const likeHitokoto = async (id: number) => {
	const data = await axios.get('https://hotaru.icu/api/hitokoto/v2/', {
		params: { op: 'likes', id },
	});
	return data;
};

export const getTotalCall = async () => {
	const data = (
		await axios.get('https://api.hotaru.icu/api/stat', {
			params: {
				op: 'query',
				name: 'hitokoto_ialapi',
			},
		})
	).data;
	console.log(data);
	if (typeof data !== 'object') return 0;
	if (!('data' in data)) return 0;
	if (typeof data.data !== 'number') return 0;
	return data.data;
};
