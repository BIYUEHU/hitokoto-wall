import axios from 'axios';
import { checkData, dataFormatError, hitokotoData, hitokotoDefault, hitokotoList } from '../func';

export const getHitokotoDefault = async (): Promise<hitokotoData<hitokotoDefault>> => {
	const data = (await axios.get('https://hotaru.icu/api/hitokoto/v2/')).data;
	if (!checkData<hitokotoDefault>(data)) {
		dataFormatError();
		console.log(data);
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
