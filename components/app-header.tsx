"use client";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User, Wrench, FolderKanban, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";

const mainNavItems = [
  { title: "About", href: "#about", icon: User },
  { title: "Skills", href: "#skills", icon: Wrench },
  { title: "Projects", href: "#projects", icon: FolderKanban },
  { title: "Contact", href: "#contact", icon: Mail },
];

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between border-b px-30">
      <div className="flex gap-10">
        <div className="flex items-center gap-4 py-3">
          <img
            src="/appImg/Logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold">Erick John Lopez</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {mainNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a href={item.href} key={index}>
                  <Button variant={'ghost'} >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </a>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ModeToggle />
    </div>
  );
}