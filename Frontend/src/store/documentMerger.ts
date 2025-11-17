import { create } from "zustand";

interface FileWidthId {
  id: string;
  file: File;
}
type MergerFile = {
  filename: string;
  base64: string;
  mimetype: string;
};
type MergerResponse = {
  message: string;
  path: MergerFile;
};
interface ToPdfState {
  files: FileWidthId[];
  loading: boolean;
  error: string | null;
  result: MergerResponse | null;

  appendFiles: (newFiles: File, id: string) => void;
  removeFiles: (id: string) => void;
  setFiles: (file: FileWidthId[]) => void;
  fetchToPdf: () => void;
}

export const useMergerFileStore = create<ToPdfState>((set, get) => ({
  files: [],
  loading: false,
  error: null,
  result: null,

  appendFiles: (newFile, id) =>
    set((state) => ({
      files: [...state.files, { file: newFile, id }],
    })),

  removeFiles: (id) =>
    set((state) => ({ files: state.files.filter((i) => i.id !== id) })),

  setFiles: (file) => set({ files: file }),

  fetchToPdf: async () => {
    const { files } = get();

    if (files.length === 0) return set({ error: "No files selected" });
    try {
      set({ loading: true, error: null });

      const formData = new FormData();
      files.forEach((file) => {
        formData.append("documents", file.file);
      });

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/document/mergerpdf`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      set({ result: data });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      set({ error: message, loading: false });
    }
  },
}));
