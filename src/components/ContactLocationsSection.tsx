"use client";
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function ContactLocationsSection() {
  const locations = [
    {
      title: 'Jönköping HQ',
      address: 'Herkulesvägen 56',
      postalCode: '553 02 Jönköping',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Herkulesvägen+56,+553+02+Jönköping,+Sweden',
    },
    {
      title: 'Jönköping Support & Service',
      address: 'Vitmossevägen 1',
      postalCode: '554 75 Jönköping',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Vitmossevägen+1,+554+75+Jönköping,+Sweden',
    },
    {
      title: 'Stockholm Sales Office',
      address: 'Skeppargatan 11',
      postalCode: '114 52 Stockholm',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Skeppargatan+11,+114+52+Stockholm,+Sweden',
    },
    {
      title: 'Stockholm - Rental & Support',
      address: 'Svarvarvägen 20',
      postalCode: '132 38 Saltsjö-boo',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Svarvarvägen+20,+132+38+Saltsjö-boo,+Sweden',
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
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Our <span style={{ color: '#2BCC07' }}>Locations</span>
          </h2>
          <p
            className="text-white/70 max-w-2xl mx-auto"
            style={{
              fontSize: '1.125rem',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Visit us at any of our offices across Sweden
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.a
              key={index}
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#2BCC07]/50 transition-all duration-500 cursor-pointer"
            >
              {/* Green accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 h-[2px] w-full bg-[#2BCC07] origin-left"
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-[#2BCC07]/10 border border-[#2BCC07]/30 group-hover:bg-[#2BCC07]/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#2BCC07]" />
                </div>

                {/* Location Details */}
                <div className="flex-1">
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {location.title}
                  </h3>
                  <p
                    className="text-white/70 mb-1"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {location.address}
                  </p>
                  <p
                    className="text-white/70"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {location.postalCode}
                  </p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-[#2BCC07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}