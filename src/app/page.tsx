import SelfIntroduction from "./components/selfIntroduction/page";
import About from "./components/about/page";
import Service from "./components/service/page";
import Work from "./components/work/page";
import Contacts from "./components/contacts/page";
export default function Home() {
  return (
    <div className="flex flex-col my-5 ">
     {/* <Navigation/> */}
      <SelfIntroduction/>
      <About/>
      <Service/> 
      <Work/> 
      <Contacts/>
    </div>
  );
}
