import Breadcrumbs from "@/components/breadcrumbs";

export default function StudyLayout({ children }) {
  return (
    <section className="flex flex-col">
      <Breadcrumbs />
      {children}
    </section>
  );
}
