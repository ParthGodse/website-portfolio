import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'parthgod0708@gmail.com',
      href: 'mailto:parthgod0708@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (812) 553-2820',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'United States',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: '#'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: '#'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      href: '#'
    }
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
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-600"
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{info.label}</p>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-white text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110 border border-gray-100"
                    title={social.label}
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