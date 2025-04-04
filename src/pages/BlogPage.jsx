import React from "react";
import Blog from "../components/Blog";
import { blogCategories, blogPosts } from "../Data";

const BlogPage = ({ language }) => {
  return (
    <div className="min-h-screen bg-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === "en" ? "Blog" : "ब्लॉग"}
        </h1>
        <Blog
          posts={blogPosts}
          categories={blogCategories}
          language={language}
        />
      </div>
    </div>
  );
};

export default BlogPage;
