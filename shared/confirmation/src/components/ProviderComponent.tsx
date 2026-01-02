import React, { useState } from "react";
import "./ProviderComponent.css";
import Confirmation from "./Confirmation";

const Provider: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-center m-5">
        <button
          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
          onClick={() => setOpen(true)}
        >
          Show success message
        </button>
      </div>

      <Confirmation
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Provider;
