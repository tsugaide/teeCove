import { useState, useEffect } from "react";
import { CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { RectangleVertical, RectangleHorizontal, Image } from "lucide-react";
import { useToPdfStore } from "@/store/imageToPdfStore";

export default function ToPdfSetting() {
  const { setSetting } = useToPdfStore();
  const [pageSize, setPageSize] = useState("A4");
  const [orientation, setOrientation] = useState("portrait");
  const [margin, setMargin] = useState("none");

  const isFitImage = pageSize === "FIT";

  useEffect(() => {
    if (!pageSize || !orientation || !margin) return;
    setSetting(pageSize, orientation, margin);
  }, [pageSize, orientation, margin, setSetting]);

  return (
    <div className="w-full max-w-md mx-auto font-montserrat mt-10">
      <div>
        <CardContent className="space-y-4">
          {/* Page Orientation */}
          <div className="space-y-2">
            <p className="text-xs font-semibold">Page orientation</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                disabled={isFitImage}
                onClick={() => setOrientation("portrait")}
                className={cn(
                  "border rounded-md py-2 text-center text-xs transition-all",
                  orientation === "portrait" &&
                    "border-[#90CAF9] text-[#90CAF9]",
                  isFitImage && "opacity-50 cursor-not-allowed"
                )}
              >
                <RectangleVertical className="mx-auto mb-1" size={20} />{" "}
                Portrait
              </button>

              <button
                disabled={isFitImage}
                onClick={() => setOrientation("landscape")}
                className={cn(
                  "border rounded-md py-2 text-center text-xs transition-all",
                  orientation === "landscape" &&
                    "border-[#90CAF9] text-[#90CAF9]",
                  isFitImage && "opacity-50 cursor-not-allowed"
                )}
              >
                <RectangleHorizontal className="mx-auto mb-1" size={20} />{" "}
                Landscape
              </button>
            </div>
          </div>

          {/* Page Size */}
          <div className="space-y-2">
            <p className="text-xs font-semibold">Page size</p>
            <Select value={pageSize} onValueChange={(v) => setPageSize(v)}>
              <SelectTrigger className="rounded-md">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A4" className="text-xs">
                  A4 (297x210 mm)
                </SelectItem>
                <SelectItem value="FIT" className="text-xs">
                  Fit image
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Margin */}
          <div className="space-y-2">
            <p className="text-xs font-semibold">Margin</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setMargin("none")}
                className={cn(
                  "border rounded-md py-2 text-xs text-center transition-all",
                  margin === "none" && "border-[#90CAF9] text-[#90CAF9]"
                )}
              >
                <Image className="mx-auto mb-1" size={20} /> No margin
              </button>

              <button
                onClick={() => setMargin("small")}
                className={cn(
                  "border rounded-md py-2 text-xs text-center transition-all",
                  margin === "small" && "border-[#90CAF9] text-[#90CAF9]"
                )}
              >
                Small
              </button>

              <button
                onClick={() => setMargin("big")}
                className={cn(
                  "border rounded-xl py-3 text-center transition-all",
                  margin === "big" && "border-[#90CAF9] text-[#90CAF9]"
                )}
              >
                Big
              </button>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
