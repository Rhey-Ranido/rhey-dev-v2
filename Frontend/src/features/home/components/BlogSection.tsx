import { BLOG_POSTS } from "../constants/blog";

export const BlogSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start py-8 border-t border-b border-border">
      <div className="w-full md:w-1/3">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Latest from <br /> the blog
        </h2>
      </div>

      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOG_POSTS.map((post, index) => (
          <div key={index} className="flex flex-col gap-6 group cursor-pointer hover:bg-muted/30 p-4 -m-4 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{post.author}</span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            
            <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors leading-snug">
              {post.title}
            </h3>
            
            <span className="text-sm text-muted-foreground font-medium">
              {post.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
