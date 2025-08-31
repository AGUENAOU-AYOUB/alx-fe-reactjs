import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <div>
      <h2>Post Detail</h2>
      <p>Post ID: <strong>{postId}</strong></p>
    </div>
  );
}
