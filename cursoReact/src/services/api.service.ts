import axios from "axios";
import type { Character } from "../models/character.model";
import { loadAbort } from "../utilities";
import type { UseAPICall } from "../models/UseAPICall";

const BASE_URL = 'https://rickandmortyapi.com/api';

export interface CharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}
export const getCharacter = (id: number): UseAPICall<Character> => {
    const controller = loadAbort();
    return {
        call: axios.get<Character>(`${BASE_URL}/character/${id}`, { signal: controller.signal }),
        controller
    };
}

export const getCharacters = (): UseAPICall<CharactersResponse> => {
    const controller = loadAbort();
    return {
        call: axios.get<CharactersResponse>(`${BASE_URL}/character`, { signal: controller.signal }),
        controller
    };
}

export const newCharacter = (character: Character): UseAPICall<Character> => {
    const controller = loadAbort();
    return {
        call: axios.post<Character>(`${BASE_URL}/character`, character, { signal: controller.signal }),
        controller
    };
}