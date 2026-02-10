"use client";
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Erik Johansson',
    title: 'Technical Support Lead',
    phone: '+46 70 123 45 67',
    email: 'erik.johansson@imvision.se',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTczODY3MDAwMHww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Anna Lindberg',
    title: 'Customer Success Manager',
    phone: '+46 70 234 56 78',
    email: 'anna.lindberg@imvision.se',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzM4NjcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Marcus Berg',
    title: 'LED Systems Specialist',
    phone: '+46 70 345 67 89',
    email: 'marcus.berg@imvision.se',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwd29ya2luZyUyMGNvbXB1dGVyJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzM4NjcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Sofia Andersson',
    title: 'Field Service Engineer',
    phone: '+46 70 456 78 90',
    email: 'sofia.andersson@imvision.se',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWwlMjBibHVlJTIwbWV0YWxsaWN8ZW58MXx8fHwxNzM4NjcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=400',
  },
];

export function SupportTeamSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Meet Our <span style={{ fontWeight: 600 }}>Support Team</span>
          </h2>
          <p
            className="text-white/60 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Our dedicated specialists are here to ensure your LED solutions perform flawlessly
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.email}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-black border border-white/10 overflow-hidden group hover:border-[#2BCC07]/50 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="text-white mb-2"
                  style={{
                    fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[#2BCC07] mb-4"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {member.title}
                </p>

                {/* Contact Links */}
                <div className="space-y-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm break-all"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
