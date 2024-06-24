import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { useState } from "react";

export const PlansData = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const plansInfo = [
    {
      name: "Arcade",
      price: "9",
      image: arcadeIcon,
    },
    {
      name: "Advanced",
      price: "12",
      image: advancedIcon,
    },
    {
      name: "Pro",
      price: "15",
      image: proIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-row gap-[18px]">
        {plansInfo.map((plan, key) => (
          <div
            key={key}
            className="w-[138px] h-[160px] rounded-xl border-2 gap-[34px] flex flex-col"
          >
            <div className="flex h-[40px] w-[40px] mt-[20px] ml-[18px]">
              <img src={plan.image} alt={`${plan.name} Icon`} />
            </div>
            <div className="flex flex-col ml-[16px] mb-[19px] gap-[2px] w-[53px] h-[45px]">
              <div className="text-[#022959] ubuntu font-[700px] non-italic">
                {plan.name}
              </div>
              <div className="text-[#9699AA]">${plan.price}/mo</div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[48px] w-[450px] bg-[#F8F9FF] rounded-xl flex justify-center gap-[24px] ">
        <div className="text-[#022959] ubuntu-bold mt-[13px] ">Monthly</div>
        <div className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div className="block h-6 w-12 rounded-full bg-[#022959] "></div>
            <div className="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition"></div>
          </div>
        </div>

        <div className="text-[#9699AA] ubuntu font-[700px] non-italic mt-[13px]">
          Yearly
        </div>
      </div>
    </div>
  );
};
