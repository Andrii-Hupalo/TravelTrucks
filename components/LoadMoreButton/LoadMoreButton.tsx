interface Props {
  onLoadMore: () => void;
  isPending: boolean;
}

export default function LoadMoreButton({ onLoadMore, isPending }: Props) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={onLoadMore}
        disabled={isPending}
        className="flex items-center justify-center h-14 px-10 bg-transparent border border-[var(--gray-light)] rounded-[200px] text-base font-medium text-[var(--main)] cursor-pointer outline-none transition-opacity hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
