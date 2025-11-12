"use client";


import { useEffect } from "react";

interface SuccessAlertProps {
  message: string;
  onClose: () => void;
}

export default function SuccessAlert({ message, onClose }: SuccessAlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // hide after 2s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="
        fixed top-5 right-5 z-50
        px-4 py-3
        rounded-md
        bg-black/95
        border border-green-500
        text-green-400 text-sm
        shadow-lg
        transition-all duration-200
      "
    >
      {(message)}
    </div>
  );
}
