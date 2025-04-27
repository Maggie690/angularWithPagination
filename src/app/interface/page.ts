import { User } from "./user"

export interface Page{
        timeStamp: string,
        statusCode: number,
        status: string,
        message: string,
        data: {
            page: {
                content: User[],
                page: {
                    size: number,
                    number: number,
                    totalElements: number,
                    totalPages: number
                }
            }
        }
}