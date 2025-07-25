"use client";

import {
  Search,
  Languages,
  FileText,
  Moon,
  Sun,
  Star,
  Bell,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-wrap items-center justify-between px-4 lg:px-6 py-2 gap-2">
        {/* Left Section (Menu + Logo/Avatar on mobile) */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8 sm:hidden">
            <AvatarImage src="/lovable-uploads/dca9673d-32ac-411a-a051-d40ffc8a113d.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[50%] max-w-md order-3 sm:order-none">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search ⌘K"
              className="pl-10 pr-4 h-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon">
            <Languages className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <FileText className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/lovable-uploads/dca9673d-32ac-411a-a051-d40ffc8a113d.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
