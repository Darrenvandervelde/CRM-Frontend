import Navbar from './components/navbar';
import Chat from './components/chat';
import BlogTile from './components/blog/blogTitle';
import posts from './components/blog/data/posts.json';
import './components/styles/blog.css';

function Blog() {
    return (
        <main>
            <Navbar />
            <Chat />
            <section className="blog-container">
                <header className="blog-header">
                    <p className="blog-header__eyebrow">Latest posts</p>
                    <h1 className="blog-header__title">Blog</h1>
                    <p className="blog-header__sub">
                        Thoughts on React, data engineering, and building things for the web.
                    </p>
                </header>

                <div className="blog-grid">
                    {posts.map(post => (
                        <BlogTile key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Blog;