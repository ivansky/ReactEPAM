export type MovieProps = {
    key: number;
    title: string;
    genres: string[];
    releaseDate: string;
    imageURL: string;
    rating: number;
}

export type SearchResultState = {
    sortBy: {
        [key: string]: boolean;
    };
    activeSortingOption: string;
}

export type ResultSortingProps = {
    sortingOptions: string[];
    activeOption: string;
    handleSwitchSorting: (e: React.MouseEvent) => void;
}