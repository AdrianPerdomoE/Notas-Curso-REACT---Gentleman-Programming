import { type Character } from "../../models/character.model";
import { getCharacter } from "../../services/api.service";
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

    const { loading, error, data, fetch } = UseAPI<Character>(getCharacter(2), { autoFetch: false });

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (!data) {
        return (
            <>
                <p>No data found</p>
                <button onClick={fetch} >Fetch</button>
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

        </>
    );
}