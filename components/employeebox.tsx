"use client"
import React, { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { FileSpreadsheet, Mail, Printer, FileText, MessageCircle, Eye, MoreHorizontal, Shield, GraduationCap, Users, Clock, DollarSign, Edit } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  phone: string;
  email: string;
  avatar: string;
  progress: number;
  progressText: string;
  role: string;
  roleIcon: string;
  department: string;
  status: "Completed" | "Pending" | "Active" | "Inactive" | "Welcoming M..." | "Guarantor's F...";
}

const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "Dele Ali",
    phone: "+23470881436",
    email: "dele.ali@company.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    progress: 88,
    progressText: "10/12",
    role: "Admin",
    roleIcon: "shield",
    department: "Admin",
    status: "Guarantor's F..."
  },
  {
    id: 2,
    name: "Rosemond Jones",
    phone: "+23470881436",
    email: "rosemond.jones@company.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    progress: 100,
    progressText: "12/12",
    role: "Admission",
    roleIcon: "edit",
    department: "Admission",
    status: "Completed"
  },
  {
    id: 3,
    name: "Adewale Murk",
    phone: "+23456872136",
    email: "adewale.murk@company.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    progress: 32,
    progressText: "3/12",
    role: "Teacher",
    roleIcon: "graduation-cap",
    department: "Academics",
    status: "Welcoming M..."
  },
  {
    id: 4,
    name: "Mr. Justin Richardson",
    phone: "+24756342412",
    email: "justin.richardson@company.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    progress: 32,
    progressText: "3/12",
    role: "Admission",
    roleIcon: "edit",
    department: "Admission",
    status: "Pending"
  },
  {
    id: 5,
    name: "Nicholas Tanner",
    phone: "+2345678901",
    email: "Layne_Kuvalis@gmail.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    progress: 32,
    progressText: "3/12",
    role: "Account Manager",
    roleIcon: "clock",
    department: "Account",
    status: "Active"
  },
  {
    id: 6,
    name: "Crystal Mays",
    phone: "+2345678902",
    email: "Layne_Kuvalis@gmail.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    progress: 45,
    progressText: "5/12",
    role: "Editor",
    roleIcon: "edit",
    department: "Admission",
    status: "Pending"
  },
  {
    id: 7,
    name: "Mary Garcia",
    phone: "+2345678903",
    email: "Layne_Kuvalis@gmail.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    progress: 32,
    progressText: "3/12",
    role: "CFO",
    roleIcon: "dollar-sign",
    department: "Account",
    status: "Inactive"
  },
  {
    id: 8,
    name: "Megan Roberts",
    phone: "+2345678904",
    email: "Layne_Kuvalis@gmail.com",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    progress: 32,
    progressText: "3/12",
    role: "HR Officer",
    roleIcon: "users",
    department: "Human Resources",
    status: "Active"
  }
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "default";
    case "Active":
      return "secondary";
    case "Pending":
      return "outline";
    case "Guarantor's F...":
      return "outline";
    case "Welcoming M...":
      return "outline";
    case "Inactive":
      return "destructive";
    default:
      return "outline";
  }
};

const getRoleIcon = (iconName: string) => {
  const iconMap = {
    shield: Shield,
    edit: Edit,
    "graduation-cap": GraduationCap,
    clock: Clock,
    "dollar-sign": DollarSign,
    users: Users
  };
  return iconMap[iconName as keyof typeof iconMap] || Shield;
};

export default function EmployeeOnboardingDashboard() {
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEmployees = useMemo(() => {
    return mockEmployees.filter(employee => {
      const matchesRole = !roleFilter || employee.role === roleFilter;
      const matchesDepartment = !departmentFilter || employee.department === departmentFilter;
      const matchesStatus = !statusFilter || employee.status === statusFilter;
      const matchesSearch = !searchQuery || 
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.phone.includes(searchQuery);
      
      return matchesRole && matchesDepartment && matchesStatus && matchesSearch;
    });
  }, [roleFilter, departmentFilter, statusFilter, searchQuery]);

  const handleSelectAll = () => {
    if (selectedEmployees.length === filteredEmployees.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(filteredEmployees.map(emp => emp.id));
    }
  };

  const handleSelectEmployee = (employeeId: number) => {
    setSelectedEmployees(prev => 
      prev.includes(employeeId) 
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const roles = [...new Set(mockEmployees.map(emp => emp.role))];
  const departments = [...new Set(mockEmployees.map(emp => emp.department))];
  const statuses = [...new Set(mockEmployees.map(emp => emp.status))];

  return (
    <div className="min-h-screen bg-background p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">List of Employee Onboarding Status</CardTitle>
          
          {/* Filters Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Roles</SelectItem>
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  {statuses.map(status => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons and Search */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Excel
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Pdf
                </Button>
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Search Employee"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Add to Group Chat
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedEmployees.length === filteredEmployees.length && filteredEmployees.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>NO</TableHead>
                  <TableHead>USER</TableHead>
                  <TableHead>ONBOARDING PROGRESS</TableHead>
                  <TableHead>ROLE</TableHead>
                  <TableHead>DEPARTMENT</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee, index) => {
                  const RoleIcon = getRoleIcon(employee.roleIcon);
                  return (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedEmployees.includes(employee.id)}
                          onCheckedChange={() => handleSelectEmployee(employee.id)}
                        />
                      </TableCell>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={employee.avatar} alt={employee.name} />
                            <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.phone}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{employee.progress}%</span>
                            <span className="text-muted-foreground">{employee.progressText}</span>
                          </div>
                          <Progress value={employee.progress} className="w-32" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <RoleIcon className="w-4 h-4 text-muted-foreground" />
                          <span>{employee.role}</span>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(employee.status)}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}