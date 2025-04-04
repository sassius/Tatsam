import React, { useState, useMemo } from "react";
import { Search, Clock, Filter } from "lucide-react";

const Blog = ({ posts, categories, language }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        const matchesSearch =
          post.title[language]
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          post.content[language]
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          !selectedCategory || post.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return b.readTime - a.readTime;
      });
  }, [posts, searchQuery, selectedCategory, sortBy, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder={
              language === "en" ? "Search posts..." : "पोस्ट खोजें..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">
                {language === "en" ? "All Categories" : "सभी श्रेणियां"}
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name[language]}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Clock size={20} className="text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="date">
                {language === "en"
                  ? "Sort by Date"
                  : "तिथि के अनुसार क्रमबद्ध करें"}
              </option>
              <option value="readTime">
                {language === "en"
                  ? "Sort by Read Time"
                  : "पढ़ने के समय के अनुसार क्रमबद्ध करें"}
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title[language]}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-purple-600">
                  {
                    categories.find((c) => c.id === post.category)?.name[
                      language
                    ]
                  }
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={16} className="mr-1" />
                  <span>
                    {post.readTime}{" "}
                    {language === "en" ? "min read" : "मिनट का पठन"}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title[language]}</h3>
              <p className="text-gray-600 mb-4">
                {post.author} •{" "}
                {new Date(post.date).toLocaleDateString(
                  language === "en" ? "en-US" : "hi-IN"
                )}
              </p>
              <p className="text-gray-700 line-clamp-3">
                {post.content[language]}
              </p>
              <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                {language === "en" ? "Read More" : "और पढ़ें"} →
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          {language === "en"
            ? "No posts found matching your criteria"
            : "आपके मानदंडों से मेल खाने वाली कोई पोस्ट नहीं मिली"}
        </div>
      )}
    </div>
  );
};

export default Blog;
