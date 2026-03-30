export interface BlogPost {
  title: string;
  author: string;
  date: string;
  category: string;
  avatar: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Quick start with Magic Portfolio",
    author: "Rhey Ranido",
    date: "April 23, 2025",
    category: "Design System",
    avatar: "https://github.com/Rhey-Ranido.png",
  },
  {
    title: "Optimizing React Performance for Large Scale Apps",
    author: "Rhey Ranido",
    date: "March 15, 2025",
    category: "Engineering",
    avatar: "https://github.com/Rhey-Ranido.png",
  },
  {
    title: "The Future of Web Development in 2025",
    author: "Rhey Ranido",
    date: "February 10, 2025",
    category: "Trends",
    avatar: "https://github.com/Rhey-Ranido.png",
  },
  {
    title: "Mastering Tailwind CSS Grid and Flexbox",
    author: "Rhey Ranido",
    date: "January 20, 2025",
    category: "Styling",
    avatar: "https://github.com/Rhey-Ranido.png",
  },
];
