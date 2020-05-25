import { parseISO, format } from "date-fns";

export default function DateFormater({ dateString }) {
  if (dateString == undefined) return "";
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{date ? format(date, "LLLL	d, yyyy") : ""}</time>
  );
}
