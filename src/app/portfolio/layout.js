import Breadcrumbs from "@/components/breadcrumbs";

export default function PortfolioLayout({ children }) {
  return (
    <section className="flex flex-col w-[1280px] mx-auto">
      <Breadcrumbs />
      {children}
    </section>
  );
}
