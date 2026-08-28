'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Helper to strip HTML tags from card preview descriptions
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
}

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('https://teqnoor.com/api/blogs');
        const json = await res.json();
        
        const posts = json.data || json.blogs || json;
        if (Array.isArray(posts) && posts.length > 0) {
          // Check console to see what keys your senior's API is returning
          console.log("All keys in blog object:", Object.keys(posts[0]));
          console.log("Full first post data:", posts[0]);
          setBlogs(posts);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex items-center justify-center p-6 font-sans">
        <div className="text-[#821fbf] font-bold text-lg animate-pulse">Loading insights...</div>
      </div>
    );
  }

  // Calculate slice indices for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] py-20 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto pt-8 sm:pt-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            All <span className="bg-gradient-to-r from-[#821fbf] to-[#9333EA] bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our latest thoughts, guides, and digital marketing strategies.
          </p>
          <div className="w-24 h-1.5 mx-auto rounded-full bg-gray-900 shadow-sm mt-6"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => {
            const cleanSnippet = stripHtml(blog.description || blog.content);

            return (
              <div 
                key={blog._id || blog.id || blog.slug}
                className="bg-white/90 backdrop-blur-xl rounded-[24px] border border-purple-100 shadow-[0_15px_35px_rgba(130,31,191,0.06)] hover:shadow-[0_20px_45px_rgba(130,31,191,0.12)] transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Card Image Container */}
                <div className="relative w-full h-52 bg-gradient-to-tr from-purple-100 via-purple-50 to-white overflow-hidden flex items-center justify-center border-b border-purple-50">
                  {(() => {
                    // Automatically tests all known API key possibilities
                    const rawImage = blog.image_url || blog.image || blog.thumbnail || blog.photo || blog.featured_image;
                    
                    if (!rawImage) {
                      return <div className="text-gray-400 text-xs font-semibold">No Image Available</div>;
                    }

                    const cleanedPath = String(rawImage).replace(/\s+/g, '').trim();
                    const imageUrl = cleanedPath.startsWith('http') 
                      ? cleanedPath 
                      : `https://teqnoor.com/${cleanedPath.replace(/^\/+/, '')}`;

                    return (
                      <img
                        src={imageUrl}
                        alt={blog.title || "Blog post banner"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          console.error("Failed to load image URL:", imageUrl);
                          e.target.style.display = 'none';
                        }}
                      />
                    );
                  })()}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#821fbf] transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {cleanSnippet}
                  </p>

                  <div className="pt-4 border-t border-purple-50 mt-auto">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#821fbf] font-bold text-sm group-hover:translate-x-1 transition-transform"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls with First, Prev, Next, and Last */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-16 flex-wrap">
            {/* First Page Button */}
            <button
              onClick={() => {
                setCurrentPage(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className={`px-3 sm:px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#821fbf] text-white hover:bg-[#6e19a3] shadow-md'
              }`}
            >
              « First
            </button>

            {/* Previous Page Button */}
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className={`px-3 sm:px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#821fbf] text-white hover:bg-[#6e19a3] shadow-md'
              }`}
            >
              ‹ Prev
            </button>

            <span className="text-gray-700 font-semibold text-sm px-2">
              Page {currentPage} of {totalPages}
            </span>

            {/* Next Page Button */}
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className={`px-3 sm:px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#821fbf] text-white hover:bg-[#6e19a3] shadow-md'
              }`}
            >
              Next ›
            </button>

            {/* Last Page Button */}
            <button
              onClick={() => {
                setCurrentPage(totalPages);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className={`px-3 sm:px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#821fbf] text-white hover:bg-[#6e19a3] shadow-md'
              }`}
            >
              Last »
            </button>
          </div>
        )}

      </div>
    </div>
  );
}