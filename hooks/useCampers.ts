"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/api";
import { CamperFilters } from "@/types/camper";

const PAGE_SIZE = 4;

export const useCampers = (filters: CamperFilters) => {
  return useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) =>
      fetchCampers(pageParam as number, filters, PAGE_SIZE),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const totalLoaded = pages.flatMap((p) => p.items).length;
      if (totalLoaded >= lastPage.total) return undefined;
      return pages.length + 1;
    },
  });
};
