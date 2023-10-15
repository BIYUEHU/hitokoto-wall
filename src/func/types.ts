export interface hitokotoData<D extends hitokotoDataType = hitokotoDefault> {
	code: number;
	message?: string;
	time?: number;
	version: '2.2';
	data: D;
}

export interface hitokotoDefault {
	id: number;
	msg: string;
	from?: string;
	type: hitokotoTypeStr;
	likes: number;
}

export type hitokotoList = [number, hitokotoDefault[]];

export type hitokotoDataType = hitokotoDefault | hitokotoList;

export type hitokotoTypeStr = '俗语' | '杂类' | 'ACG' | '文学';

export enum hitokotoType {
	ACG = 1,
	文学,
	俗语,
	杂类,
}
