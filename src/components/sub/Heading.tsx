export default function Heading({ text }: { text: string }) {
  return (
    // <h2 className="mb-20 text-3xl font-bold text-gray-600 sm:text-2xl">
    <h2 className="text-3xl font-bold text-gray-600 sm:text-2xl">
      {text}
    </h2>
  );
}
