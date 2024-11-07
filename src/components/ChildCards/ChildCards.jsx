import Card from "../Card/Card";

const ChildCards = ({title}) => {
  return (
    <div className="flex-shrink-0 w-80 bg-gray-100 p-4">
      <div className="flex justify-between">
        <h2 className="text-sm font-semibold mb-4">{title}</h2>
        <h2 className="text-sm font-semibold mb-4 bg-gray-200 rounded-md px-3 py-1">0</h2>
      </div>
      <div className="h-[80vh] scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-gray-200 overflow-y-scroll space-y-4">
        {Array(6)
          .fill()
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default ChildCards;
