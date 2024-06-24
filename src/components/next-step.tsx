type Props = {
  onClick: () => void;
};

export const NextStep = ({ onClick }: Props) => {
  return (
    <div className="w-[123px] h-[48px] bg-[#022959]   rounded-lg flex justify-center items-center ">
      <button onClick={onClick}>
        <div className="w-[123px] h-[48px] flex justify-center items-center h-full">
          <div className="ubuntu font-[800px] non-italic text-white flex justify-center items-center m-auto">
            Next Step
          </div>
        </div>
      </button>
    </div>
  );
};
