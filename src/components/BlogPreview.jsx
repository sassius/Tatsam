import React from "react";
import { Link } from "react-router";
import { Clock } from "lucide-react";

const BlogPreview= ({
  posts,
  categories,
  language,
}) => {
  // Show only the latest 4 posts
  const latestPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {language === "en" ? "Latest Posts" : "नवीनतम पोस्ट"}
        </h2>
        <Link
          to="/blog"
          className="text-purple-600 hover:text-purple-800 font-semibold flex items-center"
        >
          {language === "en" ? "View All Posts" : "सभी पोस्ट देखें"} →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {latestPosts.map((post) => (
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
              <Link
                to={`/blog/${post.id}`}
                className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors inline-block"
              >
                {language === "en" ? "Read More" : "और पढ़ें"} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
