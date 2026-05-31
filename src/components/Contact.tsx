import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare, Phone, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to SOC Analyst L1, Associate Security Analyst, and Cybersecurity Analyst opportunities.
            I am ready to contribute to SIEM monitoring, threat detection, incident response, and security automation initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MessageSquare className="text-blue-400" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <Send className="mr-2" size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <a
                href="/resume.pdf"
                download
                className="p-3 text-center bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Resume Download
              </a>
              <a
                href="https://github.com/srikruthireddy-pinnapureddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-center bg-gray-500/10 border border-gray-400/30 text-gray-200 rounded-lg hover:bg-gray-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Github size={16} />
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/srikruthi-reddy-pinnapureddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-center bg-blue-500/10 border border-blue-400/30 text-blue-200 rounded-lg hover:bg-blue-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* AI Avatar & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Animated AI Avatar */}
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-40 h-40 mx-auto mb-6 relative"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center text-6xl">
                  🤖
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-purple-400/20 rounded-full"
                />
              </motion.div>
              <p className="text-gray-300 text-lg">
                "Prepared for SOC monitoring, threat detection, and incident response operations."
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white text-center mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "srikruthi12032005@gmail.com", href: "mailto:srikruthi12032005@gmail.com", color: "from-red-400 to-pink-400" },
                  { icon: Phone, label: "+91 9849414874", href: "tel:+919849414874", color: "from-green-400 to-blue-400" },
                    { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/srikruthi-reddy-pinnapureddy", color: "from-blue-400 to-blue-600" },
                    { icon: Github, label: "GitHub Profile", href: "https://github.com/srikruthireddy-pinnapureddy", color: "from-gray-400 to-gray-600" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-r ${social.color} bg-opacity-20`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-500">
            © 2026 Srikruthi Reddy Pinnapureddy. Cybersecurity and SOC operations portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}