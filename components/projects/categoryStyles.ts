export const categoryStyles: Record<
  string,
  {
    bg: string;
    text: string;
    hover: string;
    border: string;
    ring: string;
    tagBg: string;
    tagText: string;
    icon: string;
    active: string;

  }
> = {
  web: {
    bg: "bg-purple-100 dark:bg-purple-900",
    text: "text-purple-700 dark:text-purple-200",
    hover: "hover:bg-purple-200 dark:hover:bg-purple-800",
    border: "border-purple-500",
    ring: "ring-purple-300 dark:ring-purple-600",
    tagBg: "bg-purple-100 dark:bg-purple-900",
    tagText: "text-purple-700 dark:text-purple-300",
    icon: "text-purple-500",
    active: "bg-purple-600 text-white",
  },
  
  games: {
    bg: "bg-indigo-100 dark:bg-indigo-900",
    text: "text-indigo-700 dark:text-indigo-200",
    hover: "hover:bg-indigo-200 dark:hover:bg-indigo-800",
    border: "border-indigo-500",
    ring: "ring-indigo-300 dark:ring-indigo-600",
    tagBg: "bg-indigo-100 dark:bg-indigo-900",
    tagText: "text-indigo-700 dark:text-indigo-300",
    icon: "text-indigo-500",
    active: "bg-indigo-600 text-white",
  },
  graphics: {
    bg: "bg-fuchsia-100 dark:bg-fuchsia-900",
    text: "text-fuchsia-700 dark:text-fuchsia-200",
    hover: "hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800",
    border: "border-fuchsia-500",
    ring: "ring-fuchsia-300 dark:ring-fuchsia-600",
    tagBg: "bg-fuchsia-100 dark:bg-fuchsia-900",
    tagText: "text-fuchsia-700 dark:text-fuchsia-300",
    icon: "text-fuchsia-500",
    active: "bg-fuchsia-600 text-white",
  },
  rigs: {
    bg: "bg-violet-100 dark:bg-violet-900",
    text: "text-violet-700 dark:text-violet-200",
    hover: "hover:bg-violet-200 dark:hover:bg-violet-800",
    border: "border-violet-500",
    ring: "ring-violet-300 dark:ring-violet-600",
    tagBg: "bg-violet-100 dark:bg-violet-900",
    tagText: "text-violet-700 dark:text-violet-300",
    icon: "text-violet-500",
    active: "bg-violet-600 text-white",
  },
};
