export default interface userResponseTypes {
    IsSuccess: boolean;
    Value: null | string | {
        UserId: number;
        Email: string;
        UserName: string;
        Role: number;
        Photo: string | null;
    };
    ErrorMessage?: string;
}