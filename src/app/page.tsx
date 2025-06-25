import Navigation from "./components/navigation";
import SelfIntroduction from "./components/selfIntroduction";
import About from "./components/about";
import Service from "./components/service";
import Work from "./components/work";
import Contacts from "./components/contacts";
export default function Home() {
  return (
    <div className="flex flex-col my-5 ">
     <Navigation/>
      <SelfIntroduction/>
      <About/>
      <Service/> 
      <Work/> 
      <Contacts/>
    </div>
  );
}
