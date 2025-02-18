import React from "react";
import { CustomButton } from "./CustomButton";
import { Check, X, Trash } from "lucide-react";
import { Timer } from '../types/timer';


type Props = {
  timer:Timer;
  onClose: void;
  handleDelete: void;
};

export const ConfirmationModal: React.FC<Props> = ({
  timer,
  onClose,
  handleDelete,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex items-center  gap-2">
          <Trash className="text-red-500 h-5 w-5" />
          <h3> Do You want to delete {timer.title}? </h3>
        </div>
        <div className="flex justify-around mt-4" >
          <CustomButton
            onClick={handleDelete}
            className="flex items-center gap-4 font-semibold text-md"
            icons={{
              icon: Check,
              position: "prefix",
              iconClassName: "text-green-500",
            }}
            text={"Yes"}
          />
          <CustomButton
            onClick={onClose}
            className="flex items-center gap-4 font-semibold text-md"
            title="Delete Timer"
            icons={{
              icon: X,
              position: "prefix",
              iconClassName: "text-red-500",
            }}
            text={"No"}
          />
        </div>
      </div>
    </div>
  );
};
