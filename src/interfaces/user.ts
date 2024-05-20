export interface IUserContext {
   loginUser(data: IUserInformation): Promise<void>;
}
export interface IUserInformation {
   email: string;
   password: string;
}