type Props = {
  header: string;
  subHeader: string;
};

export const Header = ({ header, subHeader }: Props) => {
  return (
    <div className="flex flex-col gap-[11px]">
      <div className="text-3xl font-bold flex justify-start">{header}</div>
      <div className="text-md flex justify-start text-[#9699AA]">
        {subHeader}
      </div>
    </div>
  );
};
