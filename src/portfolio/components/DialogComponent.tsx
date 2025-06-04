import { Course } from "../../interfaces";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export const DialogComponent = ({
  course,
  open,
  handleClose,
}: {
  course: Course;
  open: boolean;
  handleClose: () => void;
}) => {
  console.log(course.alt);
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[1000px] w-[90vw] max-h-[80vh] overflow-y-auto">
        <img 
          className="w-full h-auto object-contain" 
          src={import.meta.env.BASE_URL + course.path} 
          alt={course.alt} 
        />
      </DialogContent>
    </Dialog>
  );
};
