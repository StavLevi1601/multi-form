export default function App() {
  const personalInfo = [
    {
      label: "Name",
      type: "text",
      placeholder: "e.g Stephen King",
    },
    {
      label: "Email Address",
      type: "email",
      placeholder: "e.g stephenking@lorem.com",
    },
    {
      label: "Phone Number",
      type: "tel",
      placeholder: "e.g +1 234 567 890",
    },
  ];

  const stepsInfo = [
    {
      title: "STEP 1",
      info: "YOUR INFO",
      textColor: "text-[#022959]",
      bgColor: "bg-[#BEE2FD]",
    },
    {
      title: "STEP 2",
      info: "SELECT PLAN",
      textColor: "text-white",
      bgColor: "bg-transparent",
    },
    {
      title: "STEP 3",
      info: "ADD-ONS",
      textColor: "text-white",
      bgColor: "bg-transparent",
    },
    {
      title: "STEP 4",
      info: "SUMMARY",
      textColor: "text-white",
      bgColor: "bg-transparent",
    },
  ];

  // Reminde to myself:
  // left with minus sign to move the element to the left
  // relative - the element will be relative to the parent element,so i put the relative on the parent element
  // absolute - ממוקם באופן אבסולוטי, במידה

  return (
    <div className="h-screen w-screen bg-[#EFF5FF] flex items-center align-middle">
      <div className="w-[940px] h-[600px] m-auto bg-white py-[16px] pl-[16px] rounded-2xl flex flex-row">
        <div className="flex flex-row gap-32">
          <div className="flex w-[274px] h-[568px] bg-[#483EFF] rounded-2xl overflow-hidden relative">
            <div className=" bg-[#FFAF7E] rounded-full  w-[134px] h-[134px] absolute left-[-67px] bottom-[37.11px]"></div>
            <div className="flex flex-col gap-[32px] mt-[40px] ml-[32px]">
              {stepsInfo.map((step, key) => (
                <div key={key} className="flex flex-row gap-[16px]">
                  <div
                    className={`flex justify-center items-center w-[40px] h-[40px] border-white border-2 rounded-full ${step.textColor} ${step.bgColor}`}
                  >
                    {key + 1}
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="ubuntu-light text-sm text-white">
                      {step.title}
                    </div>
                    <div className="ubuntu-bold text-md text-white">
                      {step.info}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[450px] h-[372px] bg-white  mt-[40px]">
            <div className="flex flex-col gap-[35px]">
              <div className="flex flex-col gap-[11px]">
                <div className="ubuntu-bold text-3xl flex justify-start">
                  Personal info
                </div>
                <div className="ubuntu text-md flex justify-start text-[#9699AA]">
                  Please provide your name, email address, and phone number.
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                {personalInfo.map((info, key) => (
                  <div className="flex flex-col gap-[8px]" key={key}>
                    <label className="flex text-[#02295]">{info.label}</label>
                    <input
                      type={info.type}
                      placeholder={info.placeholder}
                      className="flex rounded-md w-[450px] h-[48px] border-2 border-[#D6D9E6] pl-[16px] ubuntu-medium"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[123px] h-[48px] bg-[#022959] mt-[70px] ml-[325px] rounded-lg flex justify-center items-center ">
              <button>
                <div className="flex justify-center items-center h-full">
                  <div className="ubuntu text-lg text-white flex justify-center items-center m-auto">
                    Next Step
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
