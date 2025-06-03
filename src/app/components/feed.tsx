import Post from "./post";

export default function Feed() {
  return (
    <div className="flex flex-col items-center w-full p-4">
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  );
}