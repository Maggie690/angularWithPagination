export interface ApiResponse<T> {
  timeStamp: String;
  statusCode: number;
  status: string;
  message: String;
  data: { page: T };
}
