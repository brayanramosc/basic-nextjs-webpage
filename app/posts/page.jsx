import PostCard from "@/components/PostCard";

const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
}

const PostPage = async () => {
    const posts = await loadPosts();

    return (
        <div>
            {
                posts.map(post =>
                    <PostCard post={post} key={post.id} />
                )
            }
        </div>
    )
}

export default PostPage;
