import ChildCards from "../ChildCards/ChildCards";

const columns = [
  "Incomplete",
  "To Do",
  "Doing",
  "Under Review",
  "Completed",
  "Overdue",
];

const ParentCard = () => {
  return (
    <div className="flex scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-gray-200 overflow-x-auto h-screen p-4 space-x-4">
      {columns.map((column, index) => (
        <ChildCards key={index} title={column} />
      ))}
    </div>
  );
};

export default ParentCard;
