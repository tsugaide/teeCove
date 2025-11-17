import DropMergerFile from "./merger/DropMergerFile";
import DownloadMergerFile from "./merger/DownloadMergerFile";
import { useMergerFileStore } from "../../../store/documentMerger";
const DocumentMerger = () => {
  const { files, fetchToPdf, loading, result } = useMergerFileStore();

  return (
    <div>
      {result ? (
        <div>
          <DownloadMergerFile files={result.path} />
        </div>
      ) : (
        <div>
          <DropMergerFile />
          {files.length > 1 && (
            <div className="flex justify-center gap-2 mt-14">
              <button
                disabled={files.length < 2}
                onClick={fetchToPdf}
                className="text-sm font-aclonica text-white bg-black px-24 py-2 rounded-full"
              >
                {loading ? "Mergering..." : "Merger"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentMerger;
