// components/projects/ProjectFilters.tsx
import React from "react";
import { categoryStyles } from "./categoryStyles";

type Props = {
  categories: { id: string; label: string }[];
  active: string;
  onSelect: (id: string) => void;
};

export default function ProjectFilters({ categories, active, onSelect }: Props) {
  return (
    <aside className="space-y-4 self-start lg:sticky lg:top-24">

      {categories.map(cat => {
        const style = categoryStyles[cat.id] || categoryStyles.web;
        const base = `${style.bg} ${style.text} ${style.hover}`;
        const activeStyles = `${style.active} shadow-md`;


        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`block w-full text-left px-4 py-2 rounded-lg transition font-medium text-sm ${
              active === cat.id ? activeStyles : base
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </aside>
  );
}
