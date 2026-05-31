import image_c47cc8122e433f909085ba8a960e3b0b0cd876d9 from 'figma:asset/c47cc8122e433f909085ba8a960e3b0b0cd876d9.png';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Target } from 'lucide-react';
import profileImage from 'figma:asset/c47cc8122e433f909085ba8a960e3b0b0cd876d9.png';

export function About() {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={image_c47cc8122e433f909085ba8a960e3b0b0cd876d9} 
                  alt="Srikruthi Reddy Pinnapureddy" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Objective
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Motivated CS undergraduate specializing in AI/ML with hands-on experience in computer vision and data visualization. 
              To pursue a Master's degree to advance my understanding of core computational concepts and research methodologies. 
              Driven to contribute to innovative, AI-powered solutions through analytical thinking and collaboration.
            </p>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-bold text-white">Education</h3>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-400/20">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold">Kakatiya Institute of Technology & Science</h4>
                    <p className="text-gray-300 text-sm">Bachelor of Technology – Computer Science and Engineering (AI & ML)</p>
                    <p className="text-purple-300 text-sm">October 2022 - Present • GPA: 8.06/10</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}