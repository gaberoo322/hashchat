import { useViewerRecord } from "@self.id/react";

function PublicRecord() {
  const record = useViewerRecord("basicProfile");

  const text = record.isLoading
    ? "Loading..."
    : record.content
    ? `Hello ${record.content.name || "stranger"}`
    : "No profile to load";
  return <p>{text}</p>;
}

export default PublicRecord;
