"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Design & Engineering",
    description:
      "Once we understand your needs and goals, we start creating your LED screen solution. This is where smart design and reliable technology come together. Our experts explore how your ideas can come to life and begin planning the setup, selecting the best combination of hardware and software to match your vision. What you want to achieve—and where the LED screen will be placed—along with your budget and preferences, guide us in choosing the ideal setup. This could include screens, audio systems, or smart sensors. No matter what, we always focus on high quality, sustainability, and energy efficiency. We act as your independent advisor and engineering partner, making sure you get the most value from your investment.",
    features: [
      "Smart design & technology integration",
      "Hardware & software selection",
      "Focus on sustainability & efficiency",
      "Independent advisor & partner",
    ],
    image:
      "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGRlc2lnbiUyMExFRCUyMHRlY2hub2xvZ3klMjBwbGFubmluZ3xlbnwxfHx8fDE3NzA2MzExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    number: "02",
    title: "Installation and Roll-out",
    description:
      "Our services and proven methods are designed to plan, install, and roll out LED screens in a smart, sustainable, and efficient way. We combine in-house installation experts with a global network of skilled and flexible engineers. With smart pre-production in our central warehouse and custom-built support apps, we ensure high-quality and consistent installations. Careful planning is key to a successful roll-out, which is why we give this phase our full attention—not only to make sure technicians are fully prepared and equipped, but also to reduce disruption to your operations. Using our in-house Smart Deployment methodology, we pre-assemble key components at our warehouse and deliver them ready to go, with minimal packaging and on-site work. This way, your LED screen installation is completed with maximum efficiency and long-term reliability.",
    features: [
      "Smart pre-production & assembly",
      "Global network of skilled engineers",
      "Minimal disruption to operations",
      "Smart Deployment methodology",
    ],
    image:
      "https://images.unsplash.com/photo-1719050817004-c76eb7c75c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBMRUQlMjBpbnN0YWxsYXRpb24lMjB3YXJlaG91c2UlMjB0ZWNobmljaWFufGVufDF8fHx8MTc3MDYzMTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    number: "03",
    title: "Smart Service & Support",
    description:
      "We make sure your LED screen always works when it should. With smart remote monitoring from our team, we can find and fix problems before they become a bigger issue. Our friendly, multilingual support team is ready to help—online or on-site—so you never have to worry. When LED screens are part of your daily business, they need to work all the time. That's why we use smart tools and experienced technicians to keep everything running smoothly. If a screen goes offline, shows the wrong content, or has an error, we can quickly take care of it—even if your local staff don't know how. With skilled people and the right technology, we give you reliable, high-quality support that keeps your screen solution performing every day.",
    features: [
      "Smart remote monitoring",
      "Multilingual support team",
      "Proactive problem detection",
      "24/7 reliability assurance",
    ],
    image:
      "https://images.unsplash.com/photo-1728917330520-9456e3f49529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjBtb25pdG9yaW5nJTIwY29udHJvbCUyMHJvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYzMTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    number: "04",
    title: "Smart Deployment with Resources Manager",
    description:
      "At IM Vision, we use our own software—Resources Manager—to manage every step of your LED screen project. From the first quote to production, installation, support, and spare parts during the full SLA period, everything is tracked in one smart platform. This gives us full control—and makes us unique. We even give you, the customer, access to follow the entire installed base. This makes it easy to monitor your solution and handle support cases smoothly. With our Smart Deployment method, your local installers or interior designers can do the final setup step-by-step on site. This saves time and reduces travel. Of course, our team is always ready to support remotely if needed. As soon as the solution goes online, Resources Manager receives a signal and starts monitoring right away. Already have an LED screen from another supplier? No problem. We can take over existing installations and connect them to our Resources Manager platform—so you get access to our smart monitoring, support, and service solutions going forward.",
    features: [
      "End-to-end project tracking",
      "Customer access to installed base",
      "Remote setup support",
      "Compatible with existing installations",
    ],
    image:
      "https://images.unsplash.com/photo-1768483538267-fce52de424d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYzMTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    number: "05",
    title: "LED Configurator",
    description:
      "Once the concept and strategy for your challenge have been formed, we embark on building a digital signage solution. This is where solutions design and integration come together. During the creative strategy process, our solutions architects analyze how the ideas can be realized and then get to work on pre-engineering. Next, we determine the best combination of hardware and software.",
    features: [
      "Solutions design & integration",
      "Creative strategy analysis",
      "Pre-engineering optimization",
      "Hardware & software selection",
    ],
    image:
      "https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmFnZSUyMExFRCUyMGNvbmZpZ3VyYXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NzA2MzEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

function ServiceAccordionItem({ service }: { service: Service }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full py-8 px-6 lg:px-12 flex items-center justify-between group hover:bg-white/5 transition-colors duration-300"
      >
        <h3
          className="text-white text-left"
          style={{
            fontSize: "clamp(2rem, 4vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {service.title}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="ml-6 flex-shrink-0"
        >
          <ArrowRight className="w-12 h-12 text-[#2BCC07]" strokeWidth={1} />
        </motion.div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-12 pb-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Description & CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p
                    className="text-white/70 mb-8"
                    style={{
                      fontSize: "clamp(1rem, 1.1vw, 1.125rem)",
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </p>

                  <motion.a
                    href="/contact"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-3 text-[#2BCC07] group cursor-pointer"
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Request Service
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#2BCC07] text-black px-4 py-1.5 font-light tracking-[0.2em] text-sm">
                    {service.number}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesSection() {
  return (
    <div className="relative bg-black">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-24 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2
            className="text-white mb-6"
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Our Services
          </h2>
          <p
            className="text-white/60"
            style={{
              fontSize: "clamp(1.125rem, 1.3vw, 1.5rem)",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            From design to deployment, we deliver complete LED solutions with
            expert support at every stage.
          </p>
        </motion.div>
      </div>

      {/* Accordion Services */}
      <div className="container mx-auto">
        {services.map((service) => (
          <ServiceAccordionItem key={service.id} service={service} />
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="h-32" />
    </div>
  );
}
