import { useEffect, useState } from "react";

import {
  FiSend,
  FiCheckCircle,
  FiExternalLink,
  FiDownload,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:carlsalido.madrigal@gmail.com",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "#",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "#",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-60px)] max-w-4xl mx-auto pb-20 md:pb-4 px-4 sm:px-6 py-6">
      <div className="text-center mb-8 fade-up">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-2">
          Get In Touch
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Have a project in mind? Let's make it happen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 fade-up">
        <div className="md:col-span-3 bg-gray-50 dark:bg-[#2d2d2d] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          {sent && (
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-3 rounded-lg mb-4 text-sm">
              <FiCheckCircle className="text-[18px]" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3c3c3c] text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-play-green focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3c3c3c] text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-play-green focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3c3c3c] text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-play-green focus:border-transparent transition-all"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3c3c3c] text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-play-green focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-play-green hover:bg-play-greenDark text-white font-medium py-3 rounded-lg text-sm transition-colors shadow-sm"
            >
              <FiSend className="text-[18px]" />
              Send Message
            </button>
          </form>
        </div>

        <div className="md:col-span-2 bg-gray-50 dark:bg-[#2d2d2d] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
            Connect With Me
          </h3>
          <div className="space-y-2">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-[#3c3c3c] transition-colors text-sm text-gray-700 dark:text-gray-300"
              >
                <link.icon className="text-[20px] text-play-green dark:text-emerald-400" />

                {link.label}

                <FiExternalLink className="text-[16px] ml-auto text-gray-400" />
              </a>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
              Contact Information
            </h3>

            <div className="text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3 px-3 py-2.5">
                <FiMail className="text-[18px] text-play-green dark:text-emerald-400" />
                <span>carlsalido.madrigal@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5">
                <FaRegAddressCard className="text-[18px] text-play-green dark:text-emerald-400" />
                <span>Marinduque, Philippines</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 fade-up">
        <div className="play-green-grad rounded-2xl p-5 sm:p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <FiFileText className="text-white text-[28px]" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Download Resume</h3>
                <p className="text-sm text-emerald-100">
                  Get a copy of my latest resume
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white text-play-green font-medium px-6 py-3 rounded-full text-sm hover:shadow-lg transition-shadow flex-shrink-0">
              <FiDownload className="text-[18px]" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
