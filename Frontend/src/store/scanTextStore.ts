import { create } from "zustand";

type ScanTextResponse = {
  text: string;
  confidence: number;
};

interface ScanTextState {
  files: File[];
  loading: boolean;
  error: string | null;
  result: ScanTextResponse | null;

  appendFiles: (newFiles: File) => void;
  removeFiles: () => void;
  fetchScanText: () => void;
}

export const useScanTextStore = create<ScanTextState>((set, get) => ({
  files: [],
  loading: false,
  error: null,
  result: null,

  appendFiles: (newFile) => set({ files: [newFile] }),
  removeFiles: () => set({ files: [] }),
  fetchScanText: async () => {
    const { files } = get();

    if (files.length == 0) return set({ error: "No files selected" });

    try {
      set({ loading: true, error: null });
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("images", file);
      });

      const res = await fetch(`${import.meta.env.VITE_API_URL}/image/scan`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      set({ result: data });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      set({ error: message, loading: false });
    }
  },
}));
