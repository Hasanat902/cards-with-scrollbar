import { FaLayerGroup, FaRegCalendarDays, FaRegComments } from "react-icons/fa6";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import { GrAttachment } from "react-icons/gr";
import { BiSolidCalendar } from "react-icons/bi";

const Card = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex justify-between">
        <div className="flex">
          <div className="avatar mr-1">
            <div className="w-5 h-5 rounded-full">
              <img src={user1} />
            </div>
          </div>
          <h3 className="text-xs font-semibold mb-2">Client Name</h3>
        </div>
        <div className="flex">
          <div className="avatar mr-1">
            <div className="w-5 h-5 rounded-full">
              <img src={user2} />
            </div>
          </div>
          <h3 className="text-xs font-semibold mb-2">Sadik Istiak</h3>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center text-xs my-3 text-gray-600 mb-4">
        <FaLayerGroup className="mr-1" />
          Lorem ipsum dolor sit amet...
        </p>
        <h3 className="text-xs flex items-center bg-slate-100 h-6 px-1 py-2 rounded-md mt-2"><BiSolidCalendar className="mr-1" />1/2</h3>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <div className="avatar mr-1">
          <div className="w-5 h-5 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar mr-1">
          <div className="w-5 h-5 rounded-full">
            <img src={user3} />
          </div>
        </div>
        <span className="bg-gray-100 w-5 h-5 text-xs rounded-full ">12+</span>         
        <span className="flex items-center"><FaRegComments className="mr-1" /> 15</span>
        <span className="flex items-center"><GrAttachment className="mr-1" /> 25</span>
        <span className="flex items-center"><FaRegCalendarDays className="mr-1" /> 30-12-2022</span>
      </div>
    </div>
  );
};

export default Card;
