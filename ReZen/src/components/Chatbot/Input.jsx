export default function Input({
  value,
  onChange,
  placeholder,
  onKeyDown,
  className,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className={`w-full px-4 py-2 text-white bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:ring-2 focus:ring-[#f0703a] outline-none ${className}`}
    />
  );
}
