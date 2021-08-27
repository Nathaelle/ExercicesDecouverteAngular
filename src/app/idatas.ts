export interface Directory {
    name: string;
    img: string;
    files: File[];
}
  
export interface File {
    name: string;
    path: string;
    created_at: Date;
}