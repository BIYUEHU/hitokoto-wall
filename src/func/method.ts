import { ElMessage } from 'element-plus';
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
	ElMessage.warning('已经没有更多了...');
};

export const dataFormatError = () => {
	ElMessage.error('数据格式错误，请检查接口！');
};
