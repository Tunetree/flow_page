"use client";
import { motion, number } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Appraisal from "@/components/appraisal";

const stats = [
  {
    title: "Total Employee",
    value: "21,459",
    change: "+29%",
    description: "Total Employee in your Organization",
    bg: "bg-blue-100",
    icon: "/images/total-employee.png",
  },
  {
    title: "Due for Confirmation",
    value: "4,567",
    change: "+18%",
    description: "Employee due for Confirmation",
    bg: "bg-yellow-100",
    icon: "/images/confirmation.png",
  },
  {
    title: "High Performer",
    value: "19,860",
    change: "+14%",
    description: "As at Last Performance Evaluation",
    bg: "bg-green-100",
    icon: "/images/high-performer.png",
  },
  {
    title: "Low Performer",
    value: "237",
    change: "+2%",
    description: "As at Last Performance Evaluation",
    bg: "bg-rose-100",
    icon: "/images/low-performer.png",
  },
];

const shortcuts = [
  {title:"Mark Attendance",
    num:"30"
  },
  {title:"Process Payroll",
    num:"396K"
  },
  {title:"Cash Advance",
    num: "36K"
  },
  {title:"Leave Application",
    num:"0"
  },
  {title:"Expense Claim Request",
    num:"0"
  },
  {title:"Payment Entry Request",
    num:"0"
  },
  {title:"Request Expense Entry",
    num:"0"
  },
  {title:"Daily Work Summary",
    num:"0"
  }
];

const appraisalCards = [
  {
    title: "General Settings",
    icon: "/asset/call_2302917 1.png",
  },
  {
    title: "KRAs and KPIs",
    icon: "/asset/diary_10748433 1.png",
  },
  {
    title: "Appraisal Cycle",
    icon: "/asset/document-writing_16999739 1.png",
  },
  {
    title: "Appraisal Template",
    icon: "/asset/call_2302917 1.png",
  },
  {
    title: "Appraisal Template Assignment",
    icon: "/asset/User Groups.png",
  },
  {
    title: "Employee Appraisal",
    icon: "/asset/application (2) 1.png",
  },
  {
    title: "Performance Improvement Plan",
    icon: "/asset/calendar_4403323 2.png",
  },
  {
    title: "Performance Report",
    icon: "/asset/Receive Dollar.png",
  },
  {
    title: "Staff Appreciation",
    icon: "/asset/cv_15390772 1.png",
  },
];

export default function DashboardPage() {
  return (
    <section className="p-6 space-y-8">
      {/* Header */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Top Performers as at Last Appraisal
      </motion.h1>

      <Appraisal />

      {/* Shortcuts */}
      <div className="bg-white p-4 rounded-xl shadow">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">Your Shortcuts</h2>
    <Button variant="ghost" className="text-purple-600 text-sm">
      Go back to HRMS dashboard <ArrowRight className="w-4 h-4 ml-1" />
    </Button>
  </div>

 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
  {shortcuts.map((item, i) => (
    <Card key={i} className="border p-2">
      <CardContent className="p-1">
        <div className="flex items-center justify-between text-xs font-medium text-gray-700">
          <div className="flex items-center space-x-2">
            <Image
              src="/asset/Vector.png"
              alt="icon"
              width={24}
              height={24}
            />
            <span>{item.title}</span>
          </div>
          <span className="text-purple-500">{item.num}</span>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
</div>

      {/* Appraisal Options */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Performance Appraisal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
          {appraisalCards.map((card, i) => (
            <Card key={i} className="hover:shadow-lg transition duration-200">
              <CardContent className="p-4 flex flex-col items-center justify-center text-sm font-medium text-gray-800">
                <Image src={card.icon} alt={card.title} width={60} height={40} className="mb-2" />
                <span className="text-xl">{card.title}</span> 
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
