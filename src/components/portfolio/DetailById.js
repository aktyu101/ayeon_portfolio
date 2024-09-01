import { getNotionData } from "@/lib/notion";
import { Renderer } from "../notion/Renderer";
import "react-notion-x/src/styles.css";

export default async function DetailById({ id }) {
  console.log("detail by id", id);
  const data = await getNotionData(id);
  console.log("data", data);
  // const [importedComponent, setImportedComponent] = useState(null);

  // useEffect(() => {
  //   const importedComponent = async () => {
  //     console.log("id", id);
  //     const importModule = await import(`./details/Detail${id}`);
  //     const DetailComponent = importModule.default;
  //     setImportedComponent(<DetailComponent />);
  //   };

  //   importedComponent();
  // }, [id]);

  return <Renderer recordMap={data} pageId={id} />;
}
//0420
