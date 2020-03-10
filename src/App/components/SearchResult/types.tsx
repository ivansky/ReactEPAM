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

export type ResultSortingProps = {
    sortingOptions: string[];
    activeOption: string;
    handleSwitchSorting: (e: React.MouseEvent) => void;
}