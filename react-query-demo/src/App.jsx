import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo</h1>
        <button onClick={() => setShow(s => !s)}>
          {show ? "Unmount" : "Mount"} PostsComponent
        </button>
        {show && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}
