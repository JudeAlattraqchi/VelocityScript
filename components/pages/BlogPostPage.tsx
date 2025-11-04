import React from 'react';
import { Page } from '../../types';
import { blogPosts } from '../../data/blogData';

interface BlogPostPageProps {
  postId: string;
  navigate: (page: Page) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId, navigate }) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="py-20 md:py-28 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <button onClick={() => navigate('blog')} className="mt-4 text-teal-500 hover:underline">
          &larr; Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate('blog')} className="mb-8 text-teal-600 font-semibold hover:text-teal-800 transition-colors">
            &larr; Back to all articles
          </button>

          <article>
            <header className="mb-8">
              <p className="text-base text-teal-600 font-semibold tracking-wide uppercase">{post.category}</p>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 my-4">
                {post.title}
              </h1>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full object-cover" src={post.author.imageUrl} alt={post.author.name} />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            </header>
            
            <img className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl mb-12" src={post.imageUrl} alt={post.title} />

            <div 
              className="prose prose-lg lg:prose-xl max-w-none text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            >
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
