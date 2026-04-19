export default function Spinner() {
  return (
    <div
      className="flex justify-center items-center py-20"
      role="status"
      aria-label="Loading"
    >
      <span className="w-10 h-10 border-[3px] border-[var(--badges)] border-t-[var(--button)] rounded-full animate-spin" />
    </div>
  );
}
