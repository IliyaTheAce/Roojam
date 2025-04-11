import axios, {AxiosRequestConfig} from "axios";
import {notFound} from "next/navigation";

export default async function ApiService<T>(config:AxiosRequestConfig){
	try {
		const result = await axios.request<T>({
			...config,
			baseURL: process.env.NEXT_PUBLIC_URL,
			headers: {
				Accept: 'application/json',
			}
		})
		return result.data;
	}
	catch (error){
		console.log(error)
		notFound()
	}

}