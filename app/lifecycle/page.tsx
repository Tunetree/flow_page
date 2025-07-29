import Header from "@/components/Header";
import Hore from "@/components/employee_hero";
import Appraisal from "@/components/appraisal";
import Body from "@/components/lifecycle"
import Employeetable from "@/components/employeetable"


export default function Home() {
  return (
    <div className="p-6 Bg-gray-200">
    <Header />
    <Hore />
    <Appraisal />
    <Body />
    <Employeetable />
    </div>
  );
}
