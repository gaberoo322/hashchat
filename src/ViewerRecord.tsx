import { useViewerRecord } from "@self.id/react";

function ShowViewerName() {
  const record = useViewerRecord("basicProfile");
  const basicProfile = record.set({ name: "gabe" });
  // record.set({
  //   BasicProfile: { name: "gabe" },
  // });

  const text = record.isLoading
    ? "Loading..."
    : record.content
    ? `Hello ${record.content.name || "stranger"}`
    : "No profile to load";
  return <p>{text}</p>;
}

export default ShowViewerName;
