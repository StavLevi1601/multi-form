import { FieldErrors, useForm } from "react-hook-form";
import {
  PersonalInfoSchema,
  personalInfoSchema,
} from "../../validation/personal-info-schema";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onData: (
    data: PersonalInfoSchema,
    errors: FieldErrors<PersonalInfoSchema>
  ) => void;
};

export const PersonalInfoData = ({ onData }: Props) => {
  const personalInfo = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "e.g Stephen King",
    },
    {
      label: "Email Address",
      name: "emailAddress",
      type: "email",
      placeholder: "e.g stephenking@lorem.com",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "tel",
      placeholder: "e.g +1 234 567 890",
    },
  ];

  const defaultValues: PersonalInfoSchema = {
    name: "",
    emailAddress: "",
    phoneNumber: "",
  };

  const methods = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
    mode: "all",
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = methods;

  console.log("errors: ", errors);

  console.log("watch: ", watch());

  const onSubmit = handleSubmit((data) => {
    console.log("data: ", data);

    onData(data, errors);
  });

  const borderColor = (name: keyof PersonalInfoSchema) => {
    console.log("errors[name]: ", errors[name]);

    return errors[name] ? "border-[#EE374A]" : "border-[#D6D9E6]";
  };

  return (
    <form onSubmit={onSubmit} method="post">
      <div className="flex flex-col gap-[24px]">
        {personalInfo.map((info, key) => (
          <div className="flex flex-col gap-[8px]" key={key}>
            <div className="flex justify-between">
              <label className="flex justify-start text-[#02295] ubuntu">
                {info.label}
              </label>
              {errors[info.name as keyof PersonalInfoSchema] && (
                <label className="flex justify-end text-[#EE374A] ubuntu font-bold">
                  {errors[info.name as keyof PersonalInfoSchema]?.message}
                </label>
              )}
            </div>

            <input
              type={info.type}
              placeholder={info.placeholder}
              className={`flex rounded-md w-[450px] h-[48px] border-2 ${borderColor(
                info.name as keyof PersonalInfoSchema
              )} pl-[16px] ubuntu font-[500px] non-italic outline-none`}
              {...register(info.name as keyof PersonalInfoSchema)}
            />
          </div>
        ))}
      </div>
    </form>
  );
};
