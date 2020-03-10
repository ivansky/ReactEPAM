export type Movie = {
    key?: number;
    title: string;
    genres: string[];
    releaseDate: string;
    imageURL: string;
    rating: number;
    description?: string;
    display?: string;
}