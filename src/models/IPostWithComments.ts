import {IComment} from "./IComment";

export interface IPostWithComments {
	userId: number;
	id: number;
	title: string;
	body: string;
	comments: IComment[];
}