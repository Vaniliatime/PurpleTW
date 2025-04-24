export default function DotsColumn({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="200"
      viewBox="0 0 20 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(9)].map((_, i) => (
        <circle key={i} cx="10" cy={i * 20 + 10} r="4" fill={color} />
      ))}
    </svg>
  );
}
