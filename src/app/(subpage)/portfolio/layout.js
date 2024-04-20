import Breadcrumbs from "@/components/breadcrumbs";

export default function PortfolioLayout({ children }) {
  return (
    <section className="flex flex-col">
      <Breadcrumbs />
      {children}
    </section>
  );
}
