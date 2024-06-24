import { useState } from "react";

export const PickAddons = () => {
  const pickAddons = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      price: "1",
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: "2",
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: "2",
    },
  ];

  const [array, setArray] = useState(new Array(pickAddons.length).fill(false));

  const handleCheckbox = (checked: boolean, key: number) => {
    const newArray = array.map((value, index) =>
      index === key ? checked : value
    );
    setArray(newArray);
  };

  return (
    <div className="flex flex-col h-[275px] w-[450px] gap-[16px]">
      {pickAddons.map((pick, key) => (
        <div
          key={key}
          className={`flex flex-row rounded-xl border-[1px] ${
            array[key] ? `border-[#483EFF]` : `border-[#D6D9E6]`
          } pl-[24px] gap-[24px]`}
        >
          <div className="flex items-center">
            <label>
              <input
                type="checkbox"
                className="accent-[#483EFF] w-[20px] h-[20px]"
                id={`${key}`}
                onChange={(e) => {
                  handleCheckbox(e.target.checked, key);
                }}
              />
            </label>
          </div>
          <div className="flex flex-col h-[81px] w-[450px] pt-[16px]  gap-[7px]">
            <div className="text-[#022959] ont-[400px] non-italic ">
              {pick.title}
            </div>
            <div className="text-[#9699AA] ubuntu font-[400px] non-italic text-sm">
              {pick.subtitle}
            </div>
          </div>
          <div className="flex items-center mr-[32px] text-sm text-[#483EFF]">{`+$${pick.price}/mo`}</div>
        </div>
      ))}
    </div>
  );
};
