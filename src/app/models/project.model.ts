export interface Project {
    id: number;
    name: string;
    icon: string;
    description: string;
    github: string;
    androidLink?: string;
    iosLink?: string;
    website?: string;
    screenshots?: string[];
}