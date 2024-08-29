export interface FormData {
    id: number;
    name: string;
    email: string;
    phone: string;

    deleteItem?(id: number): void;
}