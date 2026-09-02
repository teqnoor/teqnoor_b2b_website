'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function SingleBlogPostPage() {
  const params = useParams();
  const slug = params?.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchSingleBlog() {
      try {
        const res = await fetch(`https://teqnoor.com/api/blogs`);
        const json = await res.json();
        
        const posts = json.data || json.blogs || json;
        if (Array.isArray(posts)) {
          const foundPost = posts.find((p) => p.slug === slug);
          setBlog(foundPost || null);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSingleBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex items-center justify-center p-6 font-sans">
        <div className="text-[#8a2be2] font-bold text-lg animate-pulse">Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex flex-col items-center justify-center p-6 font-sans">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50/80 border border-purple-100 text-[#8a2be2] font-bold text-sm shadow-sm hover:bg-purple-100/60 transition-all"
        >
          ← Back to All Insights
        </Link>
      </div>
    );
  }

  // Multi-key image extraction supporting image_url, image, etc.
  let imageUrl = null;
  const rawImage = blog.image_url || blog.image || blog.thumbnail || blog.photo || blog.featured_image;
  if (rawImage) {
    const cleanedPath = String(rawImage).replace(/\s+/g, '').trim();
    imageUrl = cleanedPath.startsWith('http') 
      ? cleanedPath 
      : `https://teqnoor.com/${cleanedPath.replace(/^\/+/, '')}`;
  }

  // Helper to split title by colon for black (before) and #8a2be2 (after) styling
  const titleParts = blog.title ? blog.title.split(':') : [''];
  const beforeColon = titleParts[0];
  const afterColon = titleParts.slice(1).join(':');

  return (
    <article className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] py-20 px-4 sm:px-6 font-sans">
      
      {/* Global override style: Force remove all underlines, force color, and make content headings visible */}
      <style jsx global>{`
        .blog-content a,
        .blog-content a:link,
        .blog-content a:visited,
        .blog-content a:hover,
        .blog-content a:active {
          color: #8a2be2 !important;
          text-decoration: none !important;
          text-decoration-line: none !important;
          border-bottom: none !important;
          font-weight: 600;
        }

        /* Heading Visibility Fixes */
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          color: #111827 !important;
          font-weight: 800 !important;
          line-height: 1.3 !important;
          margin-top: 1.8em !important;
          margin-bottom: 0.6em !important;
          display: block !important;
        }

        .blog-content h1 { font-size: 2em !important; }
        .blog-content h2 { font-size: 1.6em !important; }
        .blog-content h3 { font-size: 1.35em !important; }
        .blog-content h4 { font-size: 1.15em !important; }
        .blog-content h5 { font-size: 1em !important; }
        .blog-content h6 { font-size: 0.9em !important; }
      `}</style>

      <div className="max-w-4xl mx-auto pt-8 sm:pt-12">
        
        {/* Top Button */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50/80 border border-purple-100 text-[#8a2be2] font-bold text-sm shadow-sm hover:bg-purple-100/60 transition-all hover:translate-x-[-4px]"
          >
            ← Back to All Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight text-gray-900">
            {beforeColon}
            {afterColon && (
              <>
                :<span className="text-[#8a2be2]"> {afterColon}</span>
              </>
            )}
          </h1>
          {blog.created_at && (
            <div className="text-gray-500 text-sm font-semibold">
              Published on {new Date(blog.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          )}
        </header>

        {/* Featured Image Container - Responsive adjustment only */}
        {imageUrl && (
          <div className="relative w-full h-[220px] sm:h-[350px] md:h-[460px] rounded-[24px] overflow-hidden mb-12 shadow-[0_15px_35px_rgba(138,43,226,0.08)] border border-purple-100 bg-white">
            <img
              src={imageUrl}
              alt={blog.title || "Blog banner"}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div 
          className="blog-content bg-white/90 backdrop-blur-xl rounded-[24px] p-6 sm:p-12 border border-purple-100 shadow-[0_15px_35px_rgba(138,43,226,0.06)] prose prose-purple max-w-none text-gray-700 leading-relaxed space-y-6 mb-12"
          dangerouslySetInnerHTML={{ __html: blog.content || blog.description }}
        />

        {/* Bottom Button */}
        <div className="pt-4 border-t border-purple-100 flex justify-start">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50/80 border border-purple-100 text-[#8a2be2] font-bold text-sm shadow-sm hover:bg-purple-100/60 transition-all hover:translate-x-[-4px]"
          >
            ← Back to All Insights
          </Link>
        </div>

      </div>
    </article>
  );
}