import DropFileToPdf from "./toPdf/DropFileToPdf";
import { useToPdfStore } from "../../../store/imageToPdfStore";
import DownloadFileToPdf from "./toPdf/DownloadFileToPdf";

const ImageToPdf = () => {
  const { files, fetchToPdf, loading, result } = useToPdfStore();

  return (
    <div>
      {result ? (
        <DownloadFileToPdf files={result.path} />
      ) : (
        <div>
          <DropFileToPdf />
          {files.length > 0 && (
            <div className="flex justify-center gap-2 mt-14">
              <button
                disabled={files.length < 0}
                onClick={fetchToPdf}
                className="text-sm font-aclonica text-white bg-black px-24 py-2 rounded-full"
              >
                {loading ? "Converting..." : "To Pdf"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageToPdf;
