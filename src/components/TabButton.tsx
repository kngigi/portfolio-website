import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({
  children,
  active,
  selectTab,
}: {
  children: React.ReactNode;
  active: boolean;
  selectTab: () => void;
}) => {
  return (
    <button onClick={selectTab}>
      <p
        className={cn(
          "mr-3 font-semibold hover:text-white ",
          active ? "text-white " : "text-[#adb7be]"
        )}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
