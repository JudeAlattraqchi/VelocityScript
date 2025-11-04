import React from 'react';
import { Page } from '../../types';
import { blogPosts } from '../../data/blogData';

interface BlogPageProps {
  navigate: (page: Page, id?: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="pt-24 md:pt-32">
      <section className="text-center py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Velocity Script Insights
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Exploring the latest in AI, automation, and the future of voice technology.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-teal-600">{post.category}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-800 flex-grow">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('blog-post', post.id); }} className="hover:text-teal-500 transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{post.excerpt}</p>
                <div className="mt-6 flex items-center">
                  <img className="w-10 h-10 rounded-full object-cover" src={post.author.imageUrl} alt={post.author.name} />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800 text-sm">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
