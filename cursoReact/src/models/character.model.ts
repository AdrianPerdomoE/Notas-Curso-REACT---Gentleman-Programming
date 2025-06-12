export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image?: string;
    gender: string;
}

export const EmptyCaracter: Character = {
    id: 0,
    name: "",
    status: "",
    gender: "",
    species: "",
}