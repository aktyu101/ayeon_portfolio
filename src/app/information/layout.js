import Breadcrumbs from "@/components/breadcrumbs";

export default function InformationLayout({ children }) {
  return (
    <section>
      <Breadcrumbs />
      {children}
    </section>
  );
}
