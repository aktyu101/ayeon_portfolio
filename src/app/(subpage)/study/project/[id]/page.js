import DetailById from "@/components/study/DetailById";
import { studyList } from "@/constants/studyList";

export function generateStaticParams() {
  return studyList.listSortedByDate.map(({ id }) => ({
    id: String(id),
  }));
}
export default function StudyByIdPage({ params }) {
  const { id } = params;
  return <DetailById id={id} />;
}

//study
