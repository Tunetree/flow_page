"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockEmployees } from "@/data/mockEmployees";
import { Employee, RoleType, DepartmentType, StatusType } from "@/types/employee";
import { FileSpreadsheet, Mail, Printer, FileText, MessageSquare, MoreHorizontal, Mail as MailIcon, Eye } from "lucide-react";

export function EmployeeDashboard() {
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const filteredEmployees = mockEmployees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || roleFilter === "all" || employee.role.name === roleFilter;
    const matchesDepartment = !departmentFilter || departmentFilter === "all" || employee.department === departmentFilter;
    const matchesStatus = !statusFilter || statusFilter === "all" || employee.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesDepartment && matchesStatus;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(filteredEmployees.map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleSelectEmployee = (employeeId: number, checked: boolean) => {
    if (checked) {
      setSelectedEmployees(prev => [...prev, employeeId]);
    } else {
      setSelectedEmployees(prev => prev.filter(id => id !== employeeId));
    }
  };

  const getStatusDisplayText = (status: StatusType) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'active': return 'Active';
      case 'pending': return 'Pending';
      case 'inactive': return 'Inactive';
      case 'welcoming-member': return 'Welcoming M...';
      case 'guarantor-form': return 'Guarantor\'s F...';
      default: return status;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">List of Employee Onboarding Status</h1>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          {/* Filters Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Teacher">Teacher</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="HR Officer">HR Officer</SelectItem>
                  <SelectItem value="CEO">CEO</SelectItem>
                  <SelectItem value="Account Officer">Account Officer</SelectItem>
                  <SelectItem value="Admission">Admission</SelectItem>
                </SelectContent>
              </Select>

              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Academics">Academics</SelectItem>
                  <SelectItem value="Admission">Admission</SelectItem>
                  <SelectItem value="Account">Account</SelectItem>
                  <SelectItem value="Human Resources">Human Resources</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="welcoming-member">Welcoming Member</SelectItem>
                  <SelectItem value="guarantor-form">Guarantor Form</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Export Buttons and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
            <div className="flex gap-2 flex-wrap">
              <Button size="sm" className="bg-excel text-white hover:bg-excel/90">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Excel
              </Button>
              <Button size="sm" className="bg-email text-white hover:bg-email/90">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button size="sm" className="bg-print text-print-foreground hover:bg-print/90">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button size="sm" className="bg-pdf text-white hover:bg-pdf/90">
                <FileText className="h-4 w-4 mr-2" />
                Pdf
              </Button>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                placeholder="Search Employee"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:w-64"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                Add to Group Chat
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2">
                    <Checkbox
                      checked={selectedEmployees.length === filteredEmployees.length && filteredEmployees.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">NO</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">USER</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">ONBOARDING PROGRESS</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">ROLE</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">DEPARTMENT</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">STATUS</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="border-b border-border/50">
                    <td className="py-4 px-2">
                      <Checkbox
                        checked={selectedEmployees.includes(employee.id)}
                        onCheckedChange={(checked) => handleSelectEmployee(employee.id, checked as boolean)}
                      />
                    </td>
                    <td className="py-4 px-2 text-sm text-foreground">{employee.id}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={employee.avatar}
                          alt={employee.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-foreground">{employee.name}</div>
                          <div className="text-sm text-muted-foreground">{employee.contact}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{employee.progress}%</span>
                          <span className="text-muted-foreground">{employee.progressDate}</span>
                        </div>
                        <ProgressBar value={employee.progress} className="w-24" />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg ${employee.role.color}`}>{employee.role.icon}</span>
                        <span className="text-sm text-foreground">{employee.role.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-sm text-foreground">{employee.department}</td>
                    <td className="py-4 px-2">
                      <StatusBadge variant={employee.status}>
                        {getStatusDisplayText(employee.status)}
                      </StatusBadge>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <MailIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}






{/*TABLE CODE*/}

"use client";
import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown, Eye, Edit, Trash2, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface KRAItem {
  id: string;
  kra: string;
  department: string;
  description: string;
  state: 'Active' | 'Inactive' | 'Pending';
  weight: number;
  rating: string;
  comments: number;
  likes: number;
}

const KRATable: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<'All' | 'Branch' | 'Self'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const kraData: KRAItem[] = [
    {
      id: '1',
      kra: 'Technical Excellence',
      department: 'Account +2',
      description: 'Demonstrates technical proficiency and delivers high-quality work',
      state: 'Active',
      weight: 25,
      rating: 'A-KRA',
      comments: 1,
      likes: 4
    },
    {
      id: '2',
      kra: 'Classroom Management',
      department: 'Academics',
      description: 'Ensures high levels of customer satisfaction through quality service',
      state: 'Active',
      weight: 25,
      rating: 'A-KRA',
      comments: 1,
      likes: 4
    },
    {
      id: '3',
      kra: 'Leadership & Teamwork',
      department: 'Administration +4',
      description: 'Demonstrates technical proficiency and delivers high-quality work',
      state: 'Active',
      weight: 25,
      rating: 'A-KRA',
      comments: 1,
      likes: 4
    },
    {
      id: '4',
      kra: 'Professionalism',
      department: 'All department',
      description: 'Demonstrates technical proficiency and delivers high-quality work',
      state: 'Active',
      weight: 25,
      rating: 'A-KRA',
      comments: 1,
      likes: 4
    },
    {
      id: '5',
      kra: 'Customer Satisfaction',
      department: 'Admissions +1',
      description: 'Demonstrates technical proficiency and delivers high-quality work',
      state: 'Active',
      weight: 25,
      rating: 'A-KRA',
      comments: 1,
      likes: 4
    }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(kraData.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  const getStateColor = (state: string) => {
    switch (state) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRatingColor = (rating: string) => {
    if (rating === 'A-KRA') {
      return 'bg-blue-100 text-blue-800 border-blue-200';
    }
    return 'bg-purple-100 text-purple-800 border-purple-200';
  };

  return (
    <div className="w-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>List View</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>List View</DropdownMenuItem>
              <DropdownMenuItem>Grid View</DropdownMenuItem>
              <DropdownMenuItem>Card View</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-3">
          <Button className="bg-primary text-primary-foreground">
            Create
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add New KRA</span>
          </Button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search KRAs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>All Departments</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Departments</DropdownMenuItem>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Academics</DropdownMenuItem>
              <DropdownMenuItem>Administration</DropdownMenuItem>
              <DropdownMenuItem>Admissions</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Last Updated On</span>
        </div>
      </div>

      {/* Table Selection Tabs */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">Select table list view by:</span>
          <div className="flex items-center space-x-2">
            {(['All', 'Branch', 'Self'] as const).map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTab(tab)}
                className={selectedTab === tab ? "" : "text-muted-foreground"}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">Excel</Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">Word</Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">PDF</Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800">Print</Badge>
        </div>
      </div>

      {/* Table */}
      <div className="px-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedItems.length === kraData.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="font-semibold">KRA</TableHead>
              <TableHead className="font-semibold">DEPARTMENT</TableHead>
              <TableHead className="font-semibold">DESCRIPTION</TableHead>
              <TableHead className="font-semibold">STATE</TableHead>
              <TableHead className="font-semibold">COMMENT</TableHead>
              <TableHead className="font-semibold">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {kraData.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/50">
                <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={(checked) => handleSelectItem(item.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{item.kra}</div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                        Weight {item.weight}%
                      </Badge>
                      <Badge variant="secondary" className={getRatingColor(item.rating)}>
                        {item.rating}
                      </Badge>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{item.department}</span>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    {item.description}
                  </p>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStateColor(item.state)}>
                    {item.state}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <span>6.0</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default KRATable;