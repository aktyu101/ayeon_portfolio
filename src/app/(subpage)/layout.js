import Navigation from "@/components/navigation";

export default function SubPageLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="mx-[15px] md:mx-[50px]">{children}</div>
    </div>
  );
}
