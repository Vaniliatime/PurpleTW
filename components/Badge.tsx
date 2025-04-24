export default Badge;

function Badge({
    icon,
    text,
    iconColor = "text-blue-600",
  }: {
    icon: string;
    text: string;
    iconColor?: string;
  }) {
    return (
      <span className="h-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
        <i className={`bi bi-${icon} ${iconColor}`} />
        {text}
      </span>
    );
  }
  