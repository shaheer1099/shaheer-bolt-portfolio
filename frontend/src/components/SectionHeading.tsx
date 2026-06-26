import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`text-center mb-14 md:mb-16 ${className}`}
    >
      {eyebrow && <span className="section-eyebrow mb-3 block">{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      <div className="section-divider mx-auto mb-4" />
      {description && (
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
