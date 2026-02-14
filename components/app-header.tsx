"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User, Wrench, FolderKanban, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const mainNavItems = [
  { title: "About", href: "#about", icon: User },
  { title: "Skills", href: "#skills", icon: Wrench },
  { title: "Projects", href: "#projects", icon: FolderKanban },
  { title: "Contact", href: "#contact", icon: Mail },
];

export default function AppHeader() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-between border-b px-6 py-4">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src="/appImg/Logo.png"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <h1 className="text-xl font-bold">Erick John Lopez</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {mainNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a href={item.href} key={index}>
                  <Button variant="ghost">
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </a>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {mainNavItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    href={item.href}
                    key={index}
                    onClick={() => setSheetOpen(false)}
                  >
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Button>
                  </a>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
