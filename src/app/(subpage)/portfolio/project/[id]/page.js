import DetailById from "@/components/portfolio/DetailById";
import { projectList } from "@/constants/projectList";

export function generateStaticParams() {
  return projectList.listSortedByDate.map(({ id }) => ({
    id: String(id),
  }));
}
export default function ProjectByIdPage({ params }) {
  const { id } = params;
  return <DetailById id={id} />;
}

//0414
