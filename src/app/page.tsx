import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <Content></Content>
    </div>
  );
}