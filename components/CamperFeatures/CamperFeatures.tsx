import { Camper } from "@/types/camper";

const FORM_LABELS: Record<string, string> = {
  alcove: "Alcove",
  panel_van: "Panel Van",
  integrated: "Integrated",
  semi_integrated: "Semi Integrated",
};

export default function CamperFeatures({ camper }: { camper: Camper }) {
  const amenities = camper.amenities ?? [];
  const has = (key: string) => amenities.includes(key);

  const tags: string[] = [
    camper.transmission === "automatic" ? "Automatic" : null,
    camper.transmission === "manual" ? "Manual" : null,
    has("ac") ? "AC" : null,
    has("bathroom") ? "Bathroom" : null,
    has("kitchen") ? "Kitchen" : null,
    has("tv") ? "TV" : null,
    has("radio") ? "Radio" : null,
    has("refrigerator") ? "Fridge" : null,
    has("microwave") ? "Microwave" : null,
    has("gas") ? "Gas" : null,
    has("water") ? "Water" : null,
    camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1),
    FORM_LABELS[camper.form] ?? camper.form,
  ].filter(Boolean) as string[];

  const specs = [
    { label: "Form", value: FORM_LABELS[camper.form] ?? camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <div className="bg-[var(--inputs)] rounded-[16px] p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold leading-[1.33333] text-[var(--main)] m-0">
          Vehicle details
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((label) => (
            <span
              key={label}
              className="inline-flex items-center h-12 px-3 py-2 rounded-full bg-[var(--badges)] mix-blend-multiply text-sm font-medium text-[var(--main)] whitespace-nowrap"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-0 border-t border-[var(--gray-light)] my-4" />

      <dl className="flex flex-col gap-1 m-0">
        {specs.map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center w-full">
            <dt className="text-base font-normal text-[var(--text)]">
              {label}
            </dt>
            <dd className="text-base font-medium text-[var(--main)] m-0">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
