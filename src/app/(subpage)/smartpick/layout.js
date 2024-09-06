import Breadcrumbs from "@/components/breadcrumbs";

export default function SmartPickLayout({ children }) {
  return (
    <section className="">
      <Breadcrumbs />
      {children}
    </section>
  );
}
