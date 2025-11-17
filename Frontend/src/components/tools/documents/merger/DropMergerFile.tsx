import DropFile from "../../DropFile";
import { X } from "lucide-react";
import { useMergerFileStore } from "../../../../store/documentMerger";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  useSensors,
  useSensor,
  DndContext,
  PointerSensor,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface FileWithId {
  id: string;
  file: File;
}

const DropMergerFile = () => {
  const { files, appendFiles, removeFiles, setFiles } = useMergerFileStore();

  const onFileSelect = (newFiles: FileWithId[]) => {
    newFiles.forEach((file) => {
      appendFiles(file.file, file.id);
    });
  };

  // buat sensor drag
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = files.findIndex((f) => f.id === active.id);
    const newIndex = files.findIndex((f) => f.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newFiles = arrayMove(files, oldIndex, newIndex);
      setFiles(newFiles);
    }
  };

  return (
    <DropFile onFileSelect={onFileSelect} file={files.map((f) => f.file)}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={files} strategy={verticalListSortingStrategy}>
          <div className="w-full h-full flex flex-col gap-4 justify-start py-3 px-5 overflow-y-auto">
            {files.map((f) => (
              <SortableItem key={f.id} file={f} removeFiles={removeFiles} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </DropFile>
  );
};

interface SortableItemProps {
  file: FileWithId;
  removeFiles: (id: string) => void;
}

const SortableItem = ({ file, removeFiles }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: file.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex gap-2 items-end"
      {...attributes}
      {...listeners}
    >
      <div className="w-full h-fit flex flex-col bg-[#ED3C50] px-2 py-1 rounded-sm items-start justify-start">
        <p className="w-50 text-xs truncate font-montserrat">
          {file.file.name.slice(0, -4)}
        </p>
        <div className="flex gap-2 items-end mt-1">
          <p className="text-[9px] font-montserrat font-semibold text-[#a01223] bg-[#f86778] inline-block px-1.5 py-0.5 rounded-full">
            {file.file.name.slice(-4)}
          </p>
        </div>
      </div>
      <div>
        <X
          onClick={() => removeFiles(file.id)}
          className="w-5 h-5 bg-[#53535342] rounded-full p-1"
        />
      </div>
    </div>
  );
};

export default DropMergerFile;
