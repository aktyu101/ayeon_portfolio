import Breadcrumbs from "@/components/breadcrumbs";

export default function InformationLayout({ children }) {
  return (
    <section className="w-[1280px] mx-auto">
      <Breadcrumbs />
      {children}
    </section>
  );
}
