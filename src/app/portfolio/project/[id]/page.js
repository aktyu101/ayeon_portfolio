export function generateStaticParams() {
  return Array.from({ length: 4 }).map((_, index) => ({
    id: String(index + 1),
  }));
}
export default function ProjectByIdPage({ params }) {
  const { id } = params;
  return <>ProjectByIdPage{id}</>;
}
