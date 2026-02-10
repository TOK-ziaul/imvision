"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function ProjectsGridSection() {
  const projects: Project[] = [
    {
      id: 'fashion-industry',
      title: 'Fashion Industry',
      category: 'RETAIL & EVENTS',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80',
      description: 'High-impact LED displays transforming retail experiences with dynamic visual storytelling and brand engagement.',
    },
    {
      id: 'grocery-store',
      title: 'Grocery Store',
      category: 'RETAIL',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80',
      description: 'Digital signage solutions enhancing customer experience with product promotions and wayfinding.',
    },
    {
      id: 'automotive-industry',
      title: 'Automotive Industry',
      category: 'SHOWROOM',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80',
      description: 'Immersive LED installations creating premium showroom experiences that showcase vehicles in stunning detail.',
    },
    {
      id: 'outdoor-advertising-dooh',
      title: 'Outdoor Advertising (DOOH)',
      category: 'DIGITAL OUT-OF-HOME',
      image: 'https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80',
      description: 'Large-scale outdoor LED displays delivering high-visibility advertising in urban environments.',
    },
  ];

  return (
    <div className="relative bg-black py-24 lg:py-32">
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07]" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-8 mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-[2px] origin-left bg-[#2BCC07]"
            />
            <p
              className="tracking-[0.3em] uppercase"
              style={{ fontSize: '0.875rem', color: '#2BCC07' }}
            >
              Featured Work
            </p>
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Transforming Spaces with{' '}
            <span style={{ color: '#2BCC07' }}>LED Innovation</span>
          </h2>
          <p
            className="text-white/70 max-w-3xl"
            style={{
              fontSize: '1.125rem',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Discover how we've partnered with leading brands across industries to create immersive, 
            high-impact visual experiences that captivate audiences and drive results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block relative overflow-hidden bg-[#0A0A0A]"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-white/20 text-6xl font-light">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Arrow Icon */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-[#2BCC07] bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-[#2BCC07]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 border-l-2 border-transparent group-hover:border-[#2BCC07] transition-all duration-300">
                  <p
                    className="text-[#2BCC07] mb-3 tracking-widest uppercase"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="text-white mb-4 group-hover:text-[#2BCC07] transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-white/70 mb-6"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-[#2BCC07] transition-colors duration-300">
                    <span style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                      View Project
                    </span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2BCC07] origin-left"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}