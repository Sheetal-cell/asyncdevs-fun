import PageContent from "@/components/PageContent";
import members from "./data/members.json";

export default function Home() {
  return <PageContent members={members.members} />;
}