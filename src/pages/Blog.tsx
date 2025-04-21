
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Privileged Access Management",
    excerpt: "Explore how PAM solutions have evolved to meet the challenges of modern cybersecurity threats and complex IT environments.",
    category: "Identity Management",
    date: "April 15, 2025",
    readTime: "7 min read",
    author: "John Smith",
  },
  {
    id: 2,
    title: "Securing Healthcare Data: HIPAA Compliance and Beyond",
    excerpt: "Learn about the essential security measures healthcare organizations need to implement to protect patient data and ensure regulatory compliance.",
    category: "Healthcare",
    date: "April 10, 2025",
    readTime: "5 min read",
    author: "Sarah Johnson",
  },
  {
    id: 3,
    title: "DevOps and Security: Bridging the Gap",
    excerpt: "Discover best practices for integrating security into the DevOps process to build more secure applications without sacrificing speed.",
    category: "DevOps",
    date: "April 5, 2025",
    readTime: "6 min read",
    author: "Michael Chen",
  },
  {
    id: 4,
    title: "The Rise of Identity Governance and Administration",
    excerpt: "An in-depth look at how Saviynt and other IGA solutions are transforming how organizations manage digital identities and access.",
    category: "Identity Management",
    date: "March 28, 2025",
    readTime: "8 min read",
    author: "Emily Rodriguez",
  },
  {
    id: 5,
    title: "Financial Services Cybersecurity: Protecting Digital Assets",
    excerpt: "Explore the unique security challenges facing financial institutions and strategies to protect sensitive financial data.",
    category: "Finance",
    date: "March 20, 2025",
    readTime: "6 min read",
    author: "David Wilson",
  },
  {
    id: 6,
    title: "The Human Element: Security Awareness Training",
    excerpt: "Why human factors remain crucial in cybersecurity and how effective training programs can reduce security risks.",
    category: "Training",
    date: "March 15, 2025",
    readTime: "5 min read",
    author: "Lisa Thompson",
  },
];

const Blog = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyvex Lab Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, updates, and expert perspectives on cybersecurity, identity management, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyvex to-cyvex-light h-64 md:h-auto flex items-center justify-center p-10">
                <h2 className="text-3xl font-bold text-white text-center">
                  The Future of Cybersecurity: Trends to Watch in 2025
                </h2>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cybersecurity
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  The Future of Cybersecurity: Trends to Watch in 2025
                </h3>
                <p className="text-gray-600 mb-6">
                  From AI-powered threat detection to zero-trust architectures, discover the emerging trends 
                  shaping the future of cybersecurity and how organizations can prepare for evolving threats.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">April 18, 2025 · 10 min read</p>
                    <p className="text-sm font-medium">By Robert Johnson</p>
                  </div>
                  <Button className="bg-cyvex hover:bg-cyvex-dark">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-500">{post.date} · {post.readTime}</p>
                      <p className="text-sm font-medium">By {post.author}</p>
                    </div>
                    <Button variant="ghost" className="text-cyvex hover:text-cyvex-dark hover:bg-transparent p-0">
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights, articles, and updates on cybersecurity trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyvex focus:border-transparent w-full sm:max-w-sm"
              />
              <Button className="bg-cyvex hover:bg-cyvex-dark">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
