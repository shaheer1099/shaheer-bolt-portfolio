import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, ExternalLink } from 'lucide-react';

const projectTypes = [
  'Shopify App',
  'WordPress Plugin',
  'Ecommerce Platform',
  'API Integration',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Work Together</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Have a project in mind or looking for a reliable remote developer? I work with clients
              across the <span className="text-accent">US, UK, Europe</span>, and{' '}
              <span className="text-cyan">MENA</span>. Let's talk.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@solcoders.com"
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@solcoders.com
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-700 text-gray-400 hover:text-accent hover:bg-dark-600 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-700 text-gray-400 hover:text-accent hover:bg-dark-600 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-700 text-gray-400 hover:text-green-400 hover:bg-dark-600 transition-all flex items-center gap-2 text-sm"
              >
                Upwork
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-700 text-gray-400 hover:text-green-400 hover:bg-dark-600 transition-all flex items-center gap-2 text-sm"
              >
                Fiverr
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-600 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-600 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-600 text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="text-gray-500">
                    Select project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-dark-600 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
