import { dateFormat } from "config";
import dayjs from "dayjs";

const today = (_) => dayjs().format(dateFormat);

export default today;
