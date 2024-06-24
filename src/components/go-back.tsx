type Props = {
  onClick: () => void;
};

export const GoBack = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <div className="flex justify-start w-[60px] h-[18px] text-[#9699AA] ubuntu font-[500px] non-italic">
        Go Back
      </div>
    </button>
  );
};
