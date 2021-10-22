import { v4 as uuidv4 } from "uuid";
import TemplateDocument1 from "./TemplateDocument1";

const initialDocuments = [
  {
    id: uuidv4(),
    title: "doc1",
    markdownText: TemplateDocument1,
  },
  {
    id: uuidv4(),
    title: "doc2",
    markdownText: "# Document 2",
  },
  {
    id: uuidv4(),
    title: "doc3",
    markdownText: "# Document 3",
  },
];

export default initialDocuments;
