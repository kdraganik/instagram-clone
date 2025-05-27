import Post from "./post";

export default function Feed() {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  );
}