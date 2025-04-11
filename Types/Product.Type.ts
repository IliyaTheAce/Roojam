export interface IProduct {
		"id": number,
		"name": string,
		"surname": string,
		"summary": string,
		"description": string,
		"createdAt": string,
		"updatedAt": string,
		"inventory": number,
		"catalog": string,
		"images": IProductImages[]
		"attributes": IProductAttributes[]
	}

export interface IProductAttributes {
	"id": number,
	"product_id": number,
	"name": string,
	"value": string,
}

export interface IProductImages {
	"id": number,
	"product_id": number,
	"url": string,
}