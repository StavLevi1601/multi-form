const FinishingUp = () => {
  const summary = [
    {
      title: "Arcade (Monthly)",
      price: "$9/mo",
    },
    {
      title: "Online service",
      price: "+$1/mo",
    },
    {
      title: "Larger storage",
      price: "+$2/mo",
    },
    {
      title: "Total (per month)",
      price: "+$12/mo",
    },
  ];

  return (
    <div className="w-[450px] h-[228px]">
      <div className="h-[182px] bg-[#EFF5FF] rounded-2xl p-4">
        <div className="flex flex-col">
          <div className="h-[45px] flex justify-between flex-row">
            <div className="flex flex-col">
              <div>{summary[0].title}</div>
              <div>Change</div>
            </div>
            <div>{summary[0].price}</div>
          </div>

          {/* {summary.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div>{item.title}</div>
              <div>{item.price}</div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
