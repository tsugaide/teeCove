import { create } from "zustand";

type ToPdfPath = {
  filename: string;
  base64: string;
  mimetype: string;
};
type ToPdfResponse = {
  message: string;
  path: ToPdfPath;
};
interface ToPdfState {
  files: File[];
  loading: boolean;
  error: string | null;
  result: ToPdfResponse | null;

  appendFiles: (newFiles: File) => void;
  removeFiles: (index: number) => void;
  fetchToPdf: () => void;
}

export const useToPdfStore = create<ToPdfState>((set, get) => ({
  files: [],
  loading: false,
  error: null,
  result: null,

  appendFiles: (newFile) =>
    set((state) => ({ files: [...state.files, newFile] })),

  removeFiles: (index) =>
    set((state) => ({ files: state.files.filter((_, i) => i !== index) })),

  fetchToPdf: async () => {
    const { files } = get();

    if (files.length === 0) return set({ error: "No files selected" });
    try {
      set({ loading: true, error: null });

      const formData = new FormData();
      files.forEach((file) => {
        formData.append("images", file);
      });

      const res = await fetch(`${import.meta.env.VITE_API_URL}/image/topdf`, {
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
