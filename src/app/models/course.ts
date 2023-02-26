import { Teacher } from "./teacher";

export interface Course{
    id: string;
    name: string;
    teacher: Teacher;
    isRegistrationOpen: boolean;
    startDate: Date;
    endDate: Date;
}