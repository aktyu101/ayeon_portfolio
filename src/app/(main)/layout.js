import Navigation from "@/components/navigation";

export default function MainPageLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="">{children}</div>
    </div>
  );
}
