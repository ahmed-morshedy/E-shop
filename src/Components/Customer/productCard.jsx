/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ProductCard({ data }) {
  const { title, price, image } = data;

  const shortenText = (text, maxLength = 18) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md  overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full h-80 p-5" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {shortenText(title)}
        </h3>
        <span className="text-lg font-semibold text-orange-600">${price}</span>

        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
