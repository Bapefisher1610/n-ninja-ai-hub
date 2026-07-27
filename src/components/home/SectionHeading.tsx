import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-balance font-poppins text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};
