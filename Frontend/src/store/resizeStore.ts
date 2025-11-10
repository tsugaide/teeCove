import { create } from "zustand";

type ResizedFile = {
  filename: string;
  base64: string;
  mimetype: string;
  width: number;
  height: number;
};

type ResizeResponse = {
  message: string;
  path: ResizedFile[];
};

interface ResizeFile {
  file: File;
  widthOri: number;
  heightOri: number;
  widthResize: number;
  heightResize: number;
}

interface ResizeState {
  files: ResizeFile[];
  result: ResizeResponse | null;
  loading: boolean;
  error: string | null;
  isSetting: boolean;

  appendFiles: (newFiles: File, width: number, height: number) => void;
  removeFiles: (index: number) => void;
  updateFileSize: (index: number, width: number, height: number) => void;
  setIsSetting: (isSetting: boolean) => void;
  fetchResize: () => void;
}

export const useResizeStore = create<ResizeState>((set, get) => ({
  files: [],
  result: null,
  loading: false,
  error: null,
  isSetting: false,

  setIsSetting: (isSetting) => set({ isSetting }),

  appendFiles: (newFiles, width, height) =>
    set((state) => ({
      files: [
        ...state.files,
        {
          file: newFiles,
          widthOri: width,
          heightOri: height,
          widthResize: width,
          heightResize: height,
        },
      ],
    })),

  removeFiles: (index) =>
    set((state) => ({
      files: state.files.filter((_, i) => i !== index),
    })),

  updateFileSize: (index, width, height) =>
    set((state) => {
      const updated = [...state.files];
      if (updated[index]) {
        updated[index] = {
          ...updated[index],
          widthResize: width,
          heightResize: height,
        };
      }
      return { files: updated };
    }),

  fetchResize: async () => {
    const { files } = get();

    if (files.length === 0) return set({ error: "No files selected" });

    try {
      set({ loading: true, error: null });

      const formData = new FormData();
      files.forEach(({ file, widthResize, heightResize }) => {
        formData.append("images", file);
        formData.append("width", widthResize.toString());
        formData.append("height", heightResize.toString());
      });

      const res = await fetch(`${import.meta.env.VITE_API_URL}/image/resize`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Resize failed");

      const data: ResizeResponse = await res.json();
      set({ result: data, loading: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      set({ error: message, loading: false });
    }
  },
}));
