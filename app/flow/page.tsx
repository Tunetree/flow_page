import Header from "@/components/Header";
import Hero from '@/components/Hero';
import Checkbox from '@/components/checkbox';
import Appraisal from '@/components/appraisal';
import EmployeeTable from '@/components/employeetable';

export default function Home() {
  return (
    <div className="p-6 bg-gray-200">
      <Header/>
      <Hero/>
      <Appraisal/> 
      <Checkbox/>
      <EmployeeTable/>
    </div>
  );
}
