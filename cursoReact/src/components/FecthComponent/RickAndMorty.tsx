import { type Character } from "../../models/character.model";
import { getCharacter, getCharacters, type CharactersResponse } from "../../services/api.service";
import { UseAPI } from "../../hooks/useAPI";


export const RickAndMorty = () => {
    /*const [data, setData] = useState<Character>(EmptyCaracter);
    const fetchMorty = async () => {
        const response = await getCharacter(2);
        setData(response.data);
    }

    useEffect(() => {
        fetchMorty();
    }, []);
    */

    const { loading, error, data, fetch } = UseAPI<Character, number>(getCharacter, { autoFetch: true, params: 1 });
    const { loading: l2, error: e2, data: d2, fetch: f2 } = UseAPI<CharactersResponse, void>(getCharacters, { autoFetch: true });

    if (loading || l2) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (e2) {
        return <p>Error: {e2.message}</p>;
    }
    if (!data || !d2) {
        return (
            <>
                <p>No data found</p>
                <button onClick={() => fetch(2)} >Fetch</button>
            </>
        )
    }

    return (
        <>
            <h1>Rick and Morty</h1>
            <div>
                <img src={data.image} alt={data.name} />
                <h2>{data.name}</h2>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
            </div>
            <button onClick={() => fetch(2)} >Fetch</button>

            <h2>Characters List size</h2>
            <p>{d2.results.length}</p>

            <button onClick={() => f2()} >Fetch again</button>
        </>
    );
}

