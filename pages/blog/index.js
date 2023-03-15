import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { blogs: data }
    }
}

const Blog = ({ blogs }) => {
    return (
    <>
        <h1>Blog</h1>
        {blogs.map(blog => (
            <Link href={'/blog/'+ blog.id} key={blog.id}>
                <h3>{ blog.title }</h3>
            </Link>
        ))}
    </>
    );
}
 
export default Blog;