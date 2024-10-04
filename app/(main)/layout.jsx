"use client";

import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: User },
  { href: "/availability", label: "Availability", icon: Clock },
];

const AppLayout = ({ children }) => {
  const { isLoaded } = useUser();
  const pathName = usePathname();

  return (
    <>
      {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}

      <div className="flex flex-col h-screen bg-blue-50 md:flex-row">
        <aside className="hidden md:block w-64 bg-white">
          <nav className="mt-8">
            <ul>
              {navItems.map((item) => {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 ${
                        pathName === item.href ? "bg-green-200" : ""
                      }`}
                    >
                      <item.icon className=" w-5 h-5 mr-3" /> {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>

      <main>
        <header>
          <h2>{navItems.find((item) => item.href === pathName).label}</h2>
        </header>
      </main>
      {children}
    </>
  );
};

export default AppLayout;
