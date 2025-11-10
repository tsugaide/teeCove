import DropFileResize from "./resize/DropFileResize";
import DownloadFileResized from "./resize/DownloadFileResized";
import { useResizeStore } from "../../../store/resizeStore";

const ImageResize = () => {
  const { files, setIsSetting, fetchResize, loading, result } =
    useResizeStore();
  return (
    <div>
      {result ? (
        <DownloadFileResized files={result.path} />
      ) : (
        <div>
          <DropFileResize />
          {files.length > 0 && (
            <div className="flex justify-center gap-2 mt-14">
              <button
                disabled={files.length < 0}
                onClick={fetchResize}
                className="text-sm font-aclonica text-white bg-black px-24 py-2 rounded-full"
              >
                {loading ? "Resizing..." : "Resize"}
              </button>
              <button
                className="text-xs font-montserrat px-3 py-1 bg-black text-white rounded-full"
                onClick={() => setIsSetting(true)}
              >
                Setting
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageResize;
