import { AiFillCaretDown } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import { LiaTrophySolid } from "react-icons/lia";
import PricePoolCard from "../../PricePoolCard/PricePoolCard";

const DailyMatchCard = () => {
    return (
        <div className="bg-primary-bg-image p-2 pt-32">
            {/* card 1 */ }
            <div className="rounded-lg bg-zinc-50  w-full">
                {/* card body */ }
                <div className="p-2 ">
                    {/* Title */ }
                    <div className="flex justify-start gap-5">
                        {/* img */ }
                        <img className="w-12 h-12 md:w-16 md:h-16 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqEFgxyWL-thi2FRNvLxIYuoGVQfJ0rsmog&s" alt="" />
                        {/* name | time | date| id */ }
                        <div className=" ">
                            <h3 className="font-bold">Solo Time | Mobile | #22301</h3>
                            {/* time * date */ }
                            <h4 className="  text-red-500">Time: 03/02/2005 at 04:30 PM</h4> {/* Dynamic date & time  */ }
                        </div>
                    </div>
                    {/* Body */ }
                    <div className=" uppercase text-pragraph mt-2 font-bold grid grid-cols-3  items-center gap-3">
                        <div className="">
                            <h3 >Total Price</h3>
                            <p className="text-blue-950 "><span className="font-extrabold">৳</span> 500</p>
                        </div>
                        <div className=" ">
                            <h3 >per kill</h3>
                            <p className="text-blue-950 "><span className="font-extrabold">৳</span> 10</p>
                        </div>
                        <div className=" ">
                            <h3 >entry fee</h3>
                            <p className="text-blue-950 "><span className="font-extrabold">৳</span> 20</p>
                        </div>
                        <div className=" ">
                            <h3 >type</h3>
                            <p className="text-blue-950 ">Duo</p>
                        </div>
                        <div className=" ">
                            <h3 >version</h3>
                            <p className="text-blue-950 ">mobile</p>
                        </div>
                        <div className=" ">
                            <h3 >Total Price</h3>
                            <p className="text-blue-950 ">bermuda</p>
                        </div>

                    </div>
                </div>
                {/* footer */ }
                <div className="p-2 ">
                    {/* progress bar */ }
                    <div className="  flex justify-between gap-2">
                        <div className="flex  flex-col gap-3  w-full">
                            <progress className="  progress h-1 progress-warning rounded-none" value={ 32 } max="100"></progress>
                            <div className="text-pragraph flex justify-between">
                                <p className="font-extralight text-xs md:text-sm font-semibold">Only 16 spots left</p>
                                <p className="font-semibold">32/48</p>
                            </div>
                        </div>
                        { <button className=" p-2 border-2 w-10/12 rounded-md border-secondary text-secondary font-bold md:text-xl">Join</button> }
                        {/* jodi full hoye jay tahole join dea jabe na */ }
                        {/* <button className=" p-2 border-2 w-10/12 rounded-md border-red-500 text-red-500 font-bold md:text-xl">Registration Closed</button> */ }

                    </div>
                </div>
                <div className="flex p-2">
                    {/* room details */ }
                    <div className="dropdown dropdown-bottom  border w-full ">
                        <div tabIndex={ 0 } role="button" className=" w-full p-1 flex gap-4 items-center font-bold md:text-xl  text-secondary border-2 border-secondary rounded-sm"> <span className="text-xl font-bold"><IoMdKey /></span>
                            Room Details <span className="md:text-xl"><AiFillCaretDown /></span>
                        </div>
                        <ul tabIndex={ 0 } className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow">
                            <p>room id   : 32477</p>
                            <p>password : 11122</p>
                        </ul>
                    </div>
                    {/* Price details */ }
                    <div className=" dropdown dropdown-bottom  border w-full ">
                        <div tabIndex={ 0 } role="button" className=" w-full p-1 flex gap-1 items-center font-bold md:text-xl  text-secondary border-2 border-secondary rounded-sm"> <span className="text-xl font-bold"><LiaTrophySolid /></span>
                            Total Price Details <span className="md:text-xl"><AiFillCaretDown /></span>
                        </div>
                        <ul tabIndex={ 0 } className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow">
                            <PricePoolCard></PricePoolCard>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DailyMatchCard;