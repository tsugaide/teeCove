import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

type ScanTextJson = {
  text: string;
  confidence: number;
};

type ScanTextResult = {
  response: ScanTextJson;
};

const ResultScanText = ({ response }: ScanTextResult) => {
  const [copy, setCopy] = useState(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(response.text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };
  return (
    <div className="h-48 relative bg-[#E3E3E3] rounded-lg mt-5 mx-auto">
      <p className="font-montserrat text-sm p-4">{response.text}</p>
      <div className="flex gap-5 absolute -bottom-10 right-5">
        <div className="flex gap-1 items-center">
          <p className="font-montserrat text-xs">Accurate: </p>
          <p className="font-montserrat text-white px-1.5 py-0.5 bg-black rounded-sm text-xs">
            {response.confidence}%
          </p>
        </div>
        {copy ? (
          <CopyCheck className="w-4 h-4" />
        ) : (
          <Copy onClick={copyText} className="w-4 h-4" />
        )}
      </div>
    </div>
  );
};

export default ResultScanText;
