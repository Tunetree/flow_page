"use client";
import { motion } from "framer-motion";
import { Users, UserPlus } from "lucide-react";

const metrics = [
  {
    title: "Total Employee",
    value: 21459,
    change: "(+29%)",
    description: "Total Employee in your Organization",
    icon: Users,
    color: "blue",
    changeType: "positive",
  },
  {
    title: "Due for Confirmation",
    value: 4567,
    change: "(+18%)",
    description: "Employee due for Confirmation",
    icon: UserPlus,
    color: "orange",
    changeType: "positive",
  },
  {
    title: "High Performer",
    value: 19860,
    change: "(-14%)",
    description: "As at Last Performance Evaluation",
    icon: UserPlus,
    color: "green",
    changeType: "negative",
  },
  {
    title: "Low Performer",
    value: 237,
    change: "(-42%)",
    description: "As at Last Performance Evaluation",
    icon: UserPlus,
    color: "red",
    changeType: "negative",
  },
];

const colorMap = {
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-orange-800",
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
};

const iconColorMap = {
  blue: "bg-blue-200 text-blue-700",
  orange: "bg-orange-200 text-orange-700",
  green: "bg-green-200 text-green-700",
  red: "bg-red-200 text-red-700",
};

export default function EmployeeDashboard() {
  return (
    <div className="py-10 px-4">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl p-6 relative transition-all duration-200 hover:scale-105 hover:shadow-lg ${colorMap[metric.color]}`}
            >
              {/* Icon */}
              <div
                className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg ${iconColorMap[metric.color]}`}
              >
                <metric.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium opacity-80">{metric.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{metric.value.toLocaleString()}</span>
                  <span
                    className={`text-sm font-medium px-2 py-1 `}
                  >
                    {metric.change}
                  </span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
