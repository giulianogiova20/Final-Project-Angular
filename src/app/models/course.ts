import { Teacher } from "./teacher";

export interface Course{
    id: string;
    name: string;
    board: string;
    teacher: Teacher;
    isRegistrationOpen: boolean;
    startDate: Date;
    endDate: Date;
}