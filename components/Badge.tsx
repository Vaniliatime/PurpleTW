import React from "react";

type BadgeProps = {
  icon: string;
  text: string;
  iconColor?: string;
};

const Badge: React.FC<BadgeProps> = ({ icon, text, iconColor = "text-blue-600" }) => {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-md text-gray-800 text-sm font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <i className={`bi bi-${icon} ${iconColor} text-lg`} />
      {text}
    </span>
  );
};

export default Badge;
