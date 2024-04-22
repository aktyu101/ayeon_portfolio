import { projectList } from "@/constants/projectList";
import DetailById from "@/components/study/DetailById";

export function generateStaticParams() {
  return projectList.listSortedByDate.map(({ id }) => ({
    id: String(id),
  }));
}
export default function StudyByIdPage({ params }) {
  const { id } = params;
  return <DetailById id={id} />;
}

//0414
