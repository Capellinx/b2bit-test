export interface IUserContext {
   loginUser(data: IUserInformation): Promise<void>;
   logoutUser(): void;
   profile: IProfile[] |null;
}
export interface IUserInformation {
   email: string;
   password: string;
}
export interface IProfile {
   name: string;
   email: string;
   avatar: {
      low: string,
      medium: string;
      high: string;
   }
}