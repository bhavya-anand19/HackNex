export default function Card({ children }) {
  return (
    <div className="w-full max-w-lg h-[680px] flex flex-col rounded-xl shadow-md border border-gray-600 bg-gray-900">
      {children}
    </div>
  );
}
