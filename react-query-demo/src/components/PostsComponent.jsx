import { useQuery, useQueryClient } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export default function PostsComponent() {
  const qc = useQueryClient();

  const { data, error, isLoading, isFetching, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 60 * 1000,      // fresh for 1 min
      cacheTime: 5 * 60 * 1000,  // keep in cache 5 min after unmount
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error: {String(error.message || error)}</p>;

  return (
    <section style={{ marginTop: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <button onClick={() => refetch()}>Refetch now</button>{" "}
        <button onClick={() => qc.invalidateQueries("posts")}>
          Invalidate cache
        </button>{" "}
        {isFetching && <span>Updating…</span>}
      </div>

      <ul>
        {data.slice(0, 10).map(p => (
          <li key={p.id}>
            <strong>{p.id}.</strong> {p.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
