import SearchContainer from "./api/vinApi";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchContainer />
    </main>
  );
}
