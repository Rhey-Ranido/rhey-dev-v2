import type { ProjectCategory } from "../constants/projects_v2";

interface CategoryFilterProps {
  categories: (ProjectCategory | "All")[];
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (category: ProjectCategory | "All") => void;
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-16">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeCategory === cat
              ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
              : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
