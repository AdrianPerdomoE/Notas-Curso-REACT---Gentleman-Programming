import { useFetch } from "../../hooks";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export const UsingCustomHook = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data, loading, error } = useFetch<Post[]>(url);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (!data || data.length === 0) {
        return <p>No data found.</p>;
    }
    return (
        <div>
            <h2>Using Custom Hook</h2>
            <ul>
                {data.map((post: Post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}