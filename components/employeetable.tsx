"use client";
import { useState } from "react";
import { Search, Download, Mail, Printer, FileText, MessageSquare, MoreHorizontal, Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const mockEmployees = [
  {
    id: 1,
    name: "Delia Ali",
    email: "+234708146",
    avatar: "",
    completionRate: 98,
    role: "Admin",
    department: "Admin",
    status: "Manager",
    statusColor: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 2,
    name: "Rosamond Jones",
    email: "+234708146",
    avatar: "",
    completionRate: 100,
    role: "Adminis...",
    department: "Admission",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    name: "Adewale Murk",
    email: "+234568124",
    avatar: "",
    completionRate: 21,
    role: "Teacher",
    department: "Academics",
    status: "Self Appraisal",
    statusColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 4,
    name: "Mr. Justin Richardson",
    email: "+234768127",
    avatar: "",
    completionRate: 32,
    role: "Adminis...",
    department: "Admission",
    status: "Due to Start",
    statusColor: "bg-cyan-100 text-cyan-800"
  },
  {
    id: 5,
    name: "Nicholas Tanner",
    email: "tann_tou6@tgmail.com",
    avatar: "",
    completionRate: 32,
    role: "Account ...",
    department: "Account",
    status: "Due to Start",
    statusColor: "bg-cyan-100 text-cyan-800"
  },
  {
    id: 6,
    name: "Crystal Maya",
    email: "tannu.foud@tgmail.com",
    avatar: "",
    completionRate: 45,
    role: "Editor",
    department: "Admission",
    status: "Manager",
    statusColor: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 7,
    name: "Mary Garcia",
    email: "tannu.foud@tgmail.com",
    avatar: "",
    completionRate: 98,
    role: "CFO",
    department: "Account",
    status: "99% Completed",
    statusColor: "bg-gray-100 text-gray-800"
  },
  {
    id: 8,
    name: "Megan Roberts",
    email: "tannu.foud@tgmail.com",
    avatar: "",
    completionRate: 32,
    role: "HR Officer",
    department: "Human Res...",
    status: "Due to Start",
    statusColor: "bg-cyan-100 text-cyan-800"
  },
  {
    id: 9,
    name: "Joseph Oliver",
    email: "tannu.foud@tgmail.com",
    avatar: "",
    completionRate: 32,
    role: "HR Mana...",
    department: "Human Res...",
    status: "Due to Start",
    statusColor: "bg-cyan-100 text-cyan-800"
  }
];

export function EmployeeOnboardingTable() {
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(mockEmployees.map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleSelectEmployee = (employeeId: number, checked: boolean) => {
    if (checked) {
      setSelectedEmployees([...selectedEmployees, employeeId]);
    } else {
      setSelectedEmployees(selectedEmployees.filter(id => id !== employeeId));
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-lg shadow-sm border p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-foreground">List of Employee Onboarding Status</h1>
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Filters */}
          <div className="mb-6">
            <p className="text-sm font-medium text-foreground mb-3">Filters</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="academics">Academics</SelectItem>
                  <SelectItem value="admission">Admission</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="due-to-start">Due to Start</SelectItem>
                  <SelectItem value="self-appraisal">Self Appraisal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                <Download className="w-4 h-4 mr-1" />
                Excel
              </Button>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Button>
              <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                <Printer className="w-4 h-4 mr-1" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                <FileText className="w-4 h-4 mr-1" />
                Pdf
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search Employees"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Add to Group Chat
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedEmployees.length === mockEmployees.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>USER</TableHead>
                  <TableHead className="w-48">APPRAISAL COMPLETION RATE</TableHead>
                  <TableHead>ROLE</TableHead>
                  <TableHead>DEPARTMENT</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="w-24">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedEmployees.includes(employee.id)}
                        onCheckedChange={(checked) => handleSelectEmployee(employee.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{employee.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback className="text-xs">{getInitials(employee.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{employee.name}</div>
                          <div className="text-sm text-muted-foreground">{employee.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{employee.completionRate}%</span>
                        <Progress value={employee.completionRate} className="w-24 h-2" />
                        <span className="text-xs text-muted-foreground">10/10</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">{employee.role}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{employee.department}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={employee.statusColor}>
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Bottom Actions and Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
                + Add Onboarding
              </Button>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
              <Button variant="outline" size="sm">
                Deselect All
              </Button>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployeeOnboardingTable;