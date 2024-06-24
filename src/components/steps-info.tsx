type Props = {
  currentStep: number;
};

export const StepsInfo = ({ currentStep }: Props) => {
  const stepsInfo = [
    {
      info: "YOUR INFO",
    },
    {
      info: "SELECT PLAN",
    },
    {
      info: "ADD-ONS",
    },
    {
      info: "SUMMARY",
    },
  ];

  return (
    <div className="flex flex-col gap-[32px] mt-[40px] ml-[32px]">
      {stepsInfo.map((step, key) => {
        const isCurrentStep = currentStep === key + 1;
        const textColor = isCurrentStep ? "text-[#022959]" : "text-white";
        const bgColor = isCurrentStep ? "bg-[#BEE2FD]" : "bg-transparent";
        return (
          <div key={key} className="flex flex-row gap-[16px]">
            <div
              className={`flex justify-center items-center w-[40px] h-[40px] border-white border-2 rounded-full ${textColor} ${bgColor}`}
            >
              {key + 1}
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="ubuntu font-[300px] non-italic text-sm text-white">
                STEP {currentStep}
              </div>
              <div className="ubuntu font-[700px] non-italic font-bold text-white">
                {step.info}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
