import mdui from 'mdui';
import { Base64 } from 'js-base64';
import { hitokotoData, hitokotoDataType } from './types';

export const checkData = <T extends hitokotoDataType>(data: any): data is hitokotoData<T> => {
	if (!data || Array.isArray(data) || typeof data !== 'object') return false;
	if (typeof data.code !== 'number' || typeof data.data !== 'object') return false;
	if (Array.isArray(data.data)) {
		if (!Array.isArray(data.data[1])) return false;
		for (const element of data.data[1]) {
			if (typeof element.id !== 'number' || typeof element.msg !== 'string') return false;
		}
	} else if (typeof data.data.id !== 'number' || typeof data.data.msg !== 'string') return false;
	return true;
};

export const noMoreData = () => {
	mdui.snackbar(/* html */ `<span style="color: orange">已经没有更多了...</span>`);
};

export const dataFormatError = () => {
	mdui.snackbar(/* html */ `<span style="color: red">数据格式错误，请检查接口！</span>`);
};

const hitokotoStrSuffix = 'hotaru';

export const getHitokotoId = () => {
	const idStr = window.location.href.split('?')[1];
	try {
		const base64 = typeof idStr === 'string' ? Base64.decode(idStr.split('id=')[1]) : null;
		const id = typeof base64 === 'string' ? parseInt(base64.split(hitokotoStrSuffix)[0], 10) : null;
		return Number.isNaN(id) ? null : id;
	} catch {
		return null;
	}
};

export const spawnHitokotoId = (id: number) => {
	const handle = Base64.encode(`${id}${hitokotoStrSuffix}`);
	return handle;
};

export const tips = (code: number | string, color?: string): void => {
	let message: number | string = '';
	switch (code) {
		case 1:
			message = '缺少必要参数!';
			break;
		case 2:
			message = '参数错误!';
			break;
		case 3:
			message = '接口错误';
			break;
		default:
			message = code;
	}
	if (color) message = `<span style="color:${color}">${message}</span>`;
	mdui.snackbar(message as string);
};
