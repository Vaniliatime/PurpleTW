import React from "react";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({ images, index, onClose, onNext, onPrev }: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-4 right-6 text-white text-3xl">&times;</button>

      <div className="relative max-w-4xl w-full px-4">
        <img src={images[index]} alt={`Large ${index}`} className="rounded-lg w-full max-h-[90vh] object-contain" />
        
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={onPrev} className="text-white text-4xl px-4">&#10094;</button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={onNext} className="text-white text-4xl px-4">&#10095;</button>
        </div>
      </div>
    </div>
  );
}
