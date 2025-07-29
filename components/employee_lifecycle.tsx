"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
import Image from "next/image";

// Shortcuts
const shortcuts: { title: string; num: string }[] = [
  { title: "Mark Attendance", num: "30" },
  { title: "Process Payroll", num: "396K" },
  { title: "Cash Advance", num: "36K" },
  { title: "Leave Application", num: "0" },
  { title: "Expense Claim Request", num: "0" },
  { title: "Payment Entry Request", num: "0" },
  { title: "Request Expense Entry", num: "0" },
  { title: "Daily Work Summary", num: "0" },
];

// Sections
const EmployeeOnboarding = [
  { title: "Welcoming Message", icon: "/asset/email_8961124.png" },
  { title: "Onboarding Template", icon: "/asset/onboarding (2).png" },
  { title: "Employee Onboarding", icon: "/asset/onboarding (6).png" },
  { title: "Employee Skill Map", icon: "/asset/task-list_9207995 3.png" },
];

const EmployeeTrajectory = [
  { title: "Employee Promotion Setting", icon: "/asset/cost-per-lead_11336500 1.png" },
  { title: "Employee Promotion Eligibility Status", icon: "/asset/arrow_16257071 3 (1).png" },
  { title: "Employee Promotion", icon: "/asset/improved_11193102 1.png" },
  { title: "Employee Transfer", icon: "/asset/best-employee_3194313 2.png" },
  { title: "Succession Plan", icon: "/asset/arrow_16257071 3.png" },
];

const EmployeeTraining = [
  { title: "Training Settings", icon: "/asset/training_8161827 1.png" },
  { title: "Training Program", icon: "/asset/training_8161827 1 (1).png" },
  { title: "Training Event", icon: "/asset/online_14900545 1.png" },
  { title: "Training Feedback", icon: "/asset/presentation.png" },
  { title: "Training Result", icon: "/asset/presentation.png" },
];

const EmployeeGrivances = [
  { title: "Grievance/Query Type", icon: "/asset/training_8161827 1 (2).png" },
  { title: "Employee Grievances", icon: "/asset/training_8161827 1 (3).png" },
  { title: "Employee Query", icon: "/asset/question_13444965.png" },
  { title: "Query Investigation", icon: "/asset/job_13385243 (1).png" },
  { title: "Employee Suspension", icon: "/asset/job_13385243 (1).png" },
];

const EmployeeExit = [
  { title: "Separation Template", icon: "/asset/diary_10748433 1.png" },
  { title: "Employee Separation", icon: "/asset/Financial Analytics (3).png" },
  { title: "Handover Note", icon: "/asset/Financial Analytics (4).png" },
  { title: "Full and Final Settlement", icon: "/asset/Receive Dollar.png" },
  { title: "Exit Interview", icon: "/asset/Financial Analytics (2).png" },
];

const EmployeeLifeCycleReport = [
  { title: "Onboarding Report", icon: "/asset/Financial Analytics.png" },
  { title: "Employee Promotion Report", icon: "/asset/Financial Analytics.png" },
  { title: "Employee Exit Report", icon: "/asset/Financial Analytics.png" },
  { title: "Employee Training Report", icon: "/asset/Financial Analytics.png" },
  { title: "Employee Suspension Report", icon: "/asset/Financial Analytics.png" },
];

// Section Component
const Section = ({
  title,
  data,
}: {
  title: string;
  data: { title: string; icon: string }[];
}) => (
  <div>
    <h2 className="text-2xl font-semibold p-4 bg-gray-100 w-full">{title}</h2>
    <div className="space-y-4 pb-12 bg-white rounded-b-3xl shadow-lg transition duration-200">
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
      {data.map((card, i) => (
        <Card key={i} className="hover:shadow-lg transition duration-200 bg-gray-100 m-7">
          <CardContent className="p-4 flex flex-col items-center justify-center text-sm font-medium text-gray-800">
            <Image src={card.icon} alt={card.title} width={60} height={40} className="mb-2" />
            <span className="text-center text-base">{card.title}</span>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <section 
     className="p-6 space-y-10">
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

      {/* Sections */}
      <Section title="Performance Appraisal" data={EmployeeOnboarding} />
      <Section title="Employee Trajectory" data={EmployeeTrajectory} />
      <Section title="Employee Training" data={EmployeeTraining} />
      <Section title="Employee Grievances" data={EmployeeGrivances} />
      <Section title="Employee Exit" data={EmployeeExit} />
      <Section title="Employee Life Cycle" data={EmployeeLifeCycleReport} />
    </section>
  );
}
