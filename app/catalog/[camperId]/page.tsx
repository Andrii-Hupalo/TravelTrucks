import type { Metadata } from "next";
import { fetchCamperById, fetchCamperReviews } from "@/lib/api";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";
import CamperReviews from "@/components/CamperReviews/CamperReviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import Icon from "@/components/Icon/Icon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ camperId: string }>;
}): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await fetchCamperById(camperId);
  return {
    title: `${camper.name} — TravelTrucks`,
    description: camper.description,
  };
}

export default async function CamperFullPage({
  params,
}: {
  params: Promise<{ camperId: string }>;
}) {
  const { camperId } = await params;
  const [camper, reviews] = await Promise.all([
    fetchCamperById(camperId),
    fetchCamperReviews(camperId),
  ]);

  return (
    <div className="max-w-[1440px] mx-auto px-16 py-16 flex flex-col gap-16">
      {/* Header info */}
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold leading-[1.33333] text-[var(--main)] m-0">
          {camper.name}
        </h1>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-base font-normal leading-normal text-[var(--main)]">
            <Icon id="star-filled" size={16} color="var(--rating)" />
            {camper.rating} ({reviews.length} Reviews)
          </span>
          <span className="flex items-center gap-2 text-base font-normal leading-normal text-[var(--main)]">
            <Icon id="map" size={16} color="var(--gray)" />
            {camper.location}
          </span>
        </div>
        <p className="text-2xl font-semibold leading-[1.33333] text-[var(--main)] m-0">
          €{camper.price.toLocaleString()}
        </p>
      </section>

      {/* Gallery */}
      <CamperGallery gallery={camper.gallery} />

      {/* Description */}
      <p className="text-base font-normal leading-normal text-[var(--text)] m-0">
        {camper.description}
      </p>

      {/* Features */}
      <CamperFeatures camper={camper} />

      {/* Reviews + Booking */}
      <section className="flex flex-col gap-6 pb-16">
        <h2 className="text-2xl font-semibold leading-[1.33333] text-[var(--main)] m-0">
          Reviews
        </h2>
        <div className="grid grid-cols-2 gap-6 items-start">
          <CamperReviews reviews={reviews} />
          <BookingForm camperId={camper.id} />
        </div>
      </section>
    </div>
  );
}
