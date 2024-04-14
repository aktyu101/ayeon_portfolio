import { projectList } from "@/constants/projectList";

export function generateStaticParams() {
  return projectList.listSortedByDate.map(({ id }) => ({
    id: String(id),
  }));
}
export default function ProjectByIdPage({ params }) {
  const { id } = params;
  return <>ProjectByIdPage{id}</>;
}

//0414
