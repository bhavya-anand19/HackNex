import { motion } from "framer-motion";

export default function MessageBubble({ text, sender }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`py-2 px-4 rounded-lg bg-gray-700 text-white  rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-lg max-w-xs ${
        sender === "user"
          ? "bg-[#f0703a] text-white self-end"
          : "bg-gray-300 text-black self-start"
      }`}
    >
      {text}
    </motion.div>
  );
}
