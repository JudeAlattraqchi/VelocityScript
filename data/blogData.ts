import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'popular-search-engines',
    title: "The Giants of Search: A 2024 Look at the World's Most Popular Search Engines",
    excerpt: "Ever wondered who dominates the world of search beyond Google? We dive into the stats and stories behind the leading search engines globally.",
    imageUrl: 'https://picsum.photos/seed/searchengine/800/600',
    category: 'Industry Trends',
    date: 'July 26, 2024',
    author: {
      name: 'Alex Johnson',
      imageUrl: 'https://picsum.photos/seed/alex/100/100',
    },
    content: `
      <p class="lead">In the vast digital landscape, search engines are our primary navigators. While one name often dominates the conversation, the global search market is a fascinating ecosystem of giants, innovators, and niche players. Let's explore the most popular search engines shaping how we access information in 2024.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Google: The Undisputed Leader</h2>
      <p>With a staggering market share consistently hovering around 90%, Google is more than a search engine; it's a verb. Its dominance is built on a foundation of a powerful crawling and indexing system, a famously sophisticated ranking algorithm, and a seamless integration with its suite of services like Maps, Gmail, and Android.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Microsoft Bing: The AI-Powered Challenger</h2>
      <p>Bing has solidified its position as the second most popular search engine globally. Its integration with OpenAI's technology to power features like Copilot has been a game-changer, offering users a more conversational and context-aware search experience. For visual searches, Bing often outperforms its competitors, making it a favorite among creatives.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">3. Baidu: The Gateway to China</h2>
      <p>Dominating the Chinese market, Baidu is a powerhouse tailored to the linguistic and cultural nuances of its user base. It offers a wide range of services beyond simple web search, including maps, news, and a comprehensive encyclopedia, making it an indispensable tool for navigating China's internet.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">4. Yandex: Russia's Tech Titan</h2>
      <p>Yandex is the leading search engine in Russia, known for its strong understanding of the Russian language and its suite of localized services. From ride-hailing to food delivery, Yandex has created a powerful ecosystem that keeps users engaged on its platform.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">5. DuckDuckGo: The Privacy Advocate</h2>
      <p>For the growing number of users concerned about online privacy, DuckDuckGo is the search engine of choice. It promises not to track your searches or profile you, offering a clean and private alternative to the data-hungry giants. Its popularity is a testament to a shifting consumer consciousness towards data protection.</p>
    `
  },
  // Placeholder Articles
  {
    id: 'ai-voice-revolution',
    title: '5 Ways AI Voice Agents Are Revolutionizing Customer Service',
    excerpt: 'Discover how AI-powered voice agents are setting a new standard for customer interactions, from 24/7 support to personalized experiences.',
    imageUrl: 'https://picsum.photos/seed/voiceai/800/600',
    category: 'AI Services',
    date: 'July 25, 2024',
    author: { name: 'Maria Garcia', imageUrl: 'https://picsum.photos/seed/maria/100/100' },
    content: '<p>Content coming soon.</p>'
  },
  {
    id: 'future-of-ai',
    title: 'The Future of AI: Top 5 Trends to Watch in 2025',
    excerpt: 'From generative AI to hyper-automation, we explore the key trends that will shape the artificial intelligence landscape in the coming year.',
    imageUrl: 'https://picsum.photos/seed/futureai/800/600',
    category: 'Future Tech',
    date: 'July 24, 2024',
    author: { name: 'David Chen', imageUrl: 'https://picsum.photos/seed/david/100/100' },
    content: '<p>Content coming soon.</p>'
  },
  {
    id: 'choosing-brand-voice',
    title: 'Choosing the Right AI Voice for Your Brand Identity',
    excerpt: "Your brand's voice is crucial. Learn how to select or create a custom AI voice that perfectly aligns with your brand's personality and values.",
    imageUrl: 'https://picsum.photos/seed/brandvoice/800/600',
    category: 'Branding',
    date: 'July 23, 2024',
    author: { name: 'Sarah Lee', imageUrl: 'https://picsum.photos/seed/sarah/100/100' },
    content: '<p>Content coming soon.</p>'
  },
  ...Array.from({ length: 26 }, (_, i) => ({
    id: `placeholder-${i + 1}`,
    title: `The Impact of Automation on Modern Business ${i + 1}`,
    excerpt: `This is a placeholder for a future article on AI and automation. Stay tuned for more insights from the Velocity Script team.`,
    imageUrl: `https://picsum.photos/seed/placeholder${i}/800/600`,
    category: 'Automation',
    date: 'July 22, 2024',
    author: { name: 'Alex Johnson', imageUrl: 'https://picsum.photos/seed/alex/100/100' },
    content: '<p>Content coming soon.</p>'
  }))
];
