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
    <div className="w-full bg-background mb-4">
     
      
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