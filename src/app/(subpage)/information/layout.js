import Breadcrumbs from "@/components/breadcrumbs";

export default function InformationLayout({ children }) {
  return (
    <section className="">
      <Breadcrumbs />
      {children}
    </section>
  );
}
