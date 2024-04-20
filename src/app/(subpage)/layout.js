import Navigation from "@/components/navigation";

export default function SubPageLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="w-[1280px] mx-auto">{children}</div>
    </div>
  );
}
