import DetailById from "@/components/study/DetailById";
import { StudyList } from "@/constants/studyList";

export function generateStaticParams() {
  return StudyList.listSortedByDate.map(({ id }) => ({
    id: String(id),
  }));
}
export default function StudyByIdPage({ params }) {
  const { id } = params;
  return <DetailById id={id} />;
}

//0414
