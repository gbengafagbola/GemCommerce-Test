import { useState, useRef, useEffect, useCallback } from "react";
import dogFoodBowlA from "@/assets/dog-food-bowl-A.png";
import dogFoodBowlB from "@/assets/dog-food-bowl-B.png";

export const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-slider-handle]')) {
      return;
    }
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      if (e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX);
      }
    },
    [isDragging, updateSliderPosition]
  );

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleMouseUp);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl select-none cursor-grab active:cursor-grabbing"
      onMouseDown={handleContainerClick}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={dogFoodBowlB}
          alt="Dry dog food kibble"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={dogFoodBowlA}
          alt="Fresh dog food with real ingredients"
          className="w-full h-full object-cover object-center"
          style={{
            transform: "rotate(-180deg)",
          }}
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary z-10 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      />

      <div
        data-slider-handle
        className="absolute top-1/2 z-20 cursor-grab active:cursor-grabbing"
        style={{
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
          touchAction: "none",
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleMouseDown(e);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          handleTouchStart(e);
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
          <div className="flex items-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 8 8"
            >
              <polygon
                points="5,1 2,4 5,7"
                fill="#EE6F4B"
              />
            </svg>
            <svg
              width="10"
              height="10"
              viewBox="0 0 8 8"
            >
              <polygon
                points="3,1 6,4 3,7"
                fill="#EE6F4B"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};