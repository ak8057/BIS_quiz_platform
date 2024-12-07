import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: active ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="body-3 px-7 py-3.5">{item.answer}</div>
      </motion.div>
    </div>
  );
};

export default FaqItem;
