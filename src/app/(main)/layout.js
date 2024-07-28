import Navigation from "@/components/navigation";

export default function MainPageLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
