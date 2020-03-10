export type Movie = {
    action?: (e: Movie) => void;
    key?: number;
    title: string;
    genres: string[];
    releaseDate: string;
    imageURL: string;
    rating: number;
    description?: string;
    display?: string;
    runtime?: number; 
}