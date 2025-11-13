import DropFileScanText from "./scanText/DropFileScanText";
import ResultScanText from "./scanText/ResultScanText";
import { useScanTextStore } from "../../../store/scanTextStore";

const ImageToPdf = () => {
  const { files, fetchScanText, loading, result } = useScanTextStore();

  return (
    <div>
      {result ? (
        <ResultScanText response={result} />
      ) : (
        <div>
          <DropFileScanText />
          {files.length > 0 && (
            <div className="flex justify-center gap-2 mt-14">
              <button
                disabled={files.length < 0}
                onClick={fetchScanText}
                className="text-sm font-aclonica text-white bg-black px-24 py-2 rounded-full"
              >
                {loading ? "Scanning..." : "Scan Text"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageToPdf;
