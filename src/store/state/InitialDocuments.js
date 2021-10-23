import { v4 as uuidv4 } from "uuid";

import {
  ExampleDocument1,
  ExampleDocument2,
  ExampleDocument3,
} from "./ExampleDocuments";

const initialDocuments = [
  {
    id: uuidv4(),
    title: "headings",
    markdownText: ExampleDocument1,
  },
  {
    id: uuidv4(),
    title: "links",
    markdownText: ExampleDocument2,
  },
  {
    id: uuidv4(),
    title: "Inque emi",
    markdownText: ExampleDocument3,
  },
];

export default initialDocuments;
