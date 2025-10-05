import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si'; // ✅ LeetCode icon from react-icons

const Contact = () => {
  /* ================== EDIT YOUR CONTACT LINKS HERE ================== */
  const EMAIL = 'parthgod0708@gmail.com';
  const PHONE_DISPLAY = '+1 (812) 553-2820';
  const PHONE_TEL = '+18125532820'; // digits only
  const LOCATION = 'United States';

  const GITHUB_URL = 'https://github.com/ParthGodse';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/parth-godse/';
  const LEETCODE_URL = 'https://leetcode.com/u/Parth0708/';
  /* ================================================================== */

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_TEL}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: LOCATION,
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: GITHUB_URL },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: LINKEDIN_URL },
    { icon: <SiLeetcode className="w-5 h-5" />, label: 'LeetCode', href: LEETCODE_URL },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects.
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => {
                const Wrapper = info.href ? 'a' : ('div' as any);
                return (
                  <Wrapper
                    key={info.label}
                    href={info.href}
                    {...(info.href?.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-600"
                  >
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-black">{info.label}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.label}
                    className="w-11 h-11 grid place-items-center bg-white text-gray-600 rounded-lg
                               hover:bg-blue-600 hover:text-white transition-all duration-300
                               shadow-sm hover:shadow-md border border-gray-100"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Send Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
