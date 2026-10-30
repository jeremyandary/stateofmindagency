import { X } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Budget and timeline go at the top of the message so the existing
    // contact_submissions table and send-contact-email function need no changes.
    const details = [
      formData.budget && `Budget: ${formData.budget}`,
      formData.timeline && `Timeline: ${formData.timeline}`
    ].filter(Boolean).join('\n');
    const fullMessage = details ? `${details}\n\n${formData.message}` : formData.message;

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            project_type: formData.projectType || null,
            message: fullMessage
          }
        ]);

      if (error) throw error;

      // Send email notification
      const emailUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const emailResponse = await fetch(emailUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          message: fullMessage
        })
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error('Email sending failed:', errorData);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto bg-zinc-900 rounded-lg shadow-2xl border border-[#fd8471]/20 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#f9f4ef]/60 hover:text-[#f9f4ef] transition-colors p-2"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f9f4ef] mb-2">Start a Project</h2>
          <p className="text-[#f9f4ef]/60 mb-8">Tell us about your vision and let's create something amazing together. We reply within two business days.</p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400">
              Thanks for reaching out! We'll get back to you within two business days.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
              Something went wrong. Please try again in a moment.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] placeholder-white/40 focus:outline-none focus:border-[#fd8471]/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] placeholder-white/40 focus:outline-none focus:border-[#fd8471]/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] placeholder-white/40 focus:outline-none focus:border-[#fd8471]/50 transition-colors"
                placeholder="Optional"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] focus:outline-none focus:border-[#fd8471]/50 transition-colors"
              >
                <option value="">Select a type</option>
                <option value="Brand Strategy & Identity">Brand Strategy &amp; Identity</option>
                <option value="Commercial / Brand Film">Commercial / Brand Film</option>
                <option value="Social Campaign">Social Campaign</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Monthly Content Retainer">Monthly Content Retainer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                  Budget
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] focus:outline-none focus:border-[#fd8471]/50 transition-colors"
                >
                  <option value="">Select a range</option>
                  <option value="Under $10k">Under $10k</option>
                  <option value="$10k–$25k">$10k–$25k</option>
                  <option value="$25k–$50k">$25k–$50k</option>
                  <option value="$50k–$100k">$50k–$100k</option>
                  <option value="$100k+">$100k+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] focus:outline-none focus:border-[#fd8471]/50 transition-colors"
                >
                  <option value="">Select a timeline</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Flexible / exploring">Flexible / exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#f9f4ef] mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-[#f9f4ef] placeholder-white/40 focus:outline-none focus:border-[#fd8471]/50 transition-colors resize-none"
                placeholder="Tell us about your project, your goals, and any ideas you already have..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#fd8471] text-black font-medium text-sm tracking-wide hover:bg-[#fd8471]/90 transition-all duration-300 hover:scale-[1.02] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
