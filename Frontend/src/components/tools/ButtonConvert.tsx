const ButtonConvert = ({
  file,
  onConvert,
  isLoading,
}: {
  file: File[];
  onConvert: () => void;
  isLoading: boolean;
}) => {
  return (
    <div className="flex justify-center">
      <button
        disabled={!file}
        onClick={onConvert}
        className="text-sm font-aclonica text-white bg-black px-24 py-2 rounded-full mt-10"
      >
        {isLoading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
};

export default ButtonConvert;
