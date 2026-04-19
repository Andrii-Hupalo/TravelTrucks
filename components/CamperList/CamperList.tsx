import { Camper } from "@/types/camper";
import CamperCard from "@/components/CamperCard/CamperCard";

interface Props {
  campers: Camper[];
}

export default function CamperList({ campers }: Props) {
  if (campers.length === 0) {
    return (
      <p className="text-base text-[var(--text)] text-center py-16">
        No campers match your search. Try adjusting the filters.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-8 list-none m-0 p-0 w-full">
      {campers.map((camper, idx) => (
        <li key={camper.id}>
          <CamperCard camper={camper} priority={idx === 0} />
        </li>
      ))}
    </ul>
  );
}
