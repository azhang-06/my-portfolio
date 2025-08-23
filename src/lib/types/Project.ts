export interface Project<T> {
    id: string;
    projectType: string;
    projectName: string;
    role: string;
    title: string;
    description: string;
    projectSub: T;
    mainImage: string;
    dateInformation: DateInformation;
}

export interface DateInformation {
    startDate: string;
    endDate: string;
}