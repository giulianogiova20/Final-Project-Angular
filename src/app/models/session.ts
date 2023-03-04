import { User } from "./user";

export interface Session{
    sessionActive: boolean;
    userActive?: User;
}