export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="ml-2 p-2 bg-[#f0703a] text-white hover:bg-[#d65924] rounded-lg"
    >
      {children}
    </button>
  );
}
