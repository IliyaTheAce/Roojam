export interface ICategory {
	"name": string,
	id: number,
	parentId: number,
	children?: ICategory[]
}