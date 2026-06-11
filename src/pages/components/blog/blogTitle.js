function BlogTile({ post }) {
    return (
        <article
            className={`blog-tile blog-tile--${post.size} blog-tile--${post.color}`}
        >
            <span className="blog-tile__category">
                {post.category}
            </span>

            <h2 className="blog-tile__title">
                {post.title}
            </h2>

            <p className="blog-tile__excerpt">
                {post.excerpt}
            </p>

            <footer className="blog-tile__meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
            </footer>
        </article>
    );
}

export default BlogTile;
