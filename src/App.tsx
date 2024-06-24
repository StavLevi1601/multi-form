import { NextStep } from "./components/next-step";
import { StepsInfo } from "./components/steps-info";
import { Header } from "./components/header";
import { useState } from "react";
import { PersonalInfoData } from "./register/step-1/personal-info-data";
import { PlansData } from "./register/step-2/select-plans-data";
import { GoBack } from "./components/go-back";
import { PickAddons } from "./register/step-3/pick-add-ons";
import FinishingUp from "./register/step-4/finishing-up";
import { PersonalInfoSchema } from "./validation/personal-info-schema";
import { FieldErrors } from "react-hook-form";

export const headers = [
  {
    header: "Personal info",
    subHeader: "Please provide your name, email address, and phone number.",
  },
  {
    header: "Your plan",
    subHeader: "Please choose the plan that’s right for you.",
  },
  {
    header: "Pick add-ons",
    subHeader: "Add-ons help enhance your gaming experience.",
  },
  {
    header: "Finishing up",
    subHeader: "Double-check everything looks OK before confirming.",
  },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoSchema | null>(
    null
  );
  const [personalInfoErrors, setPersonalInfoErrors] =
    useState<FieldErrors<PersonalInfoSchema> | null>(null);

  const goToNextStep = () => {
    console.log("personalInfoErrors: ", personalInfoErrors);
    console.log("personalInfo: ", personalInfo?.name);

    if (
      currentStep === 1 &&
      personalInfoErrors &&
      (!personalInfo?.name ||
        !personalInfo.emailAddress ||
        !personalInfo.phoneNumber)
    )
      return;
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handlePersonalInfo = (
    data: PersonalInfoSchema,
    errors: FieldErrors<PersonalInfoSchema>
  ) => {
    setPersonalInfo(data);
    setPersonalInfoErrors(errors);
  };

  const justify = currentStep === 1 ? "justify-end" : "justify-between";
  const marginTop =
    currentStep === 1
      ? "mt-[40px]"
      : currentStep === 3
      ? "mt-[45px]"
      : "mt-[75px]";

  return (
    <div className="h-screen bg-[#EFF5FF] flex items-center align-middle">
      <div className="w-[940px] h-[600px] m-auto bg-white py-[16px] pl-[16px] rounded-2xl flex flex-row">
        <div className="flex flex-row gap-32">
          <div className="flex w-[274px] h-[568px] bg-cover bg-center relative bg-[url('./assets/images/bg-sidebar-desktop.svg')]">
            <StepsInfo currentStep={currentStep} />
          </div>

          <div className="w-[450px] h-[372px] bg-white  pt-[40px]">
            <div className="flex flex-col gap-[35px]">
              {headers.map((header, index) => {
                if (currentStep === index + 1) {
                  return (
                    <Header
                      header={header.header}
                      subHeader={header.subHeader}
                    />
                  );
                }
              })}
              {currentStep === 1 && (
                <PersonalInfoData onData={handlePersonalInfo} />
              )}
              {currentStep === 2 && <PlansData />}
              {currentStep === 3 && <PickAddons />}
              {currentStep === 4 && <FinishingUp />}
              <div
                className={`flex ${justify} items-center h-[48px] w-[450px] ${marginTop} ml-[5px]`}
              >
                {currentStep !== 1 && <GoBack onClick={goToPreviousStep} />}
                <NextStep onClick={goToNextStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
