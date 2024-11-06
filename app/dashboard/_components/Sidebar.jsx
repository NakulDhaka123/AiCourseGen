"use client";

import React, { useContext } from "react";
import { Progress } from "@/components/ui/progress";
import { HiOutlineHome } from "react-icons/hi";
import { CiPower } from "react-icons/ci";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";
import { adminConfig } from "@/configs/AdminConfig";

const Sidebar = () => {
  const { user } = useUser();
  const path = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

  const isAdmin = adminConfig.emails.includes(user?.primaryEmailAddress?.emailAddress);
  const handleLogout = async () => {
    await signOut({ redirectTo: '/' }); // Redirect after logout
  };

  const menu = [
    { id: 1, name: "Home", icon: <HiOutlineHome />, path: "/dashboard" },
    { id: 2, name: "Explore", icon: <HiOutlineSquare3Stack3D />, path: "/dashboard/explore" },
    { id: 3, name: "Upgrade", icon: <HiOutlineShieldCheck />, path: "/dashboard/upgrade" },
    ...(isAdmin ? [{ id: 5, name: "Admin Users", icon: <HiOutlineShieldCheck />, path: "/dashboard/admin-users" }] : []),
    { id: 4, name: "Logout", icon: <CiPower />, path: "/dashboard/logout", isLogout: true },
  ];

  const maxCourses = 2;
  const courseCount = userCourseList?.length || 0;
  const progress = isAdmin ? 100 : Math.min((courseCount / maxCourses) * 100, 100);
  const needsUpgrade = !isAdmin && courseCount >= maxCourses;

  return (
    <div className="fixed h-full md:w-64 p-4 shadow-md">
      <Image src={"/logo.png"} width={44} height={44} alt="Logo" />
      <hr className="my-3" />
      <ul>
        {menu.map((item) => (
          item.isLogout ? (
            <li
              key={item.id}
              className={`flex items-center gap-2 text-white cursor-pointer p-3 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-500 hover:backdrop-blur-md rounded-lg mb-3`}
              onClick={handleLogout}
            >
              <div>{item.icon}</div>
              <h2>{item.name}</h2>
            </li>
          ) : (
            <Link href={item.path} key={item.id}>
              <li
                key={item.id}
                className={`flex items-center gap-2 text-white cursor-pointer p-3 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-500 hover:backdrop-blur-md rounded-lg mb-3 ${item.path === path ? "bg-gradient-to-r from-purple-600 to-violet-500 backdrop-blur-md" : ""}`}
              >
                <div>{item.icon}</div>
                <h2>{item.name}</h2>
              </li>
            </Link>
          )
        ))}
      </ul>
      <div className="absolute bottom-10 text-center w-[80%]">
        <h2 className="text-sm my-2">
          {isAdmin ? (
            <Progress value={(courseCount / 100) * 100} />
          ) : (
            <Progress value={(courseCount / maxCourses) * 100} />
          )}
          {isAdmin
            ? `Courses Created: ${courseCount}`
            : `${courseCount} out of ${maxCourses} courses created`}
        </h2>
          <h2 className="text-xs text-white mt-2 text-center">
            Upgrade your plan to unlimited course generation
          </h2>
      </div>
    </div>
  );
};

export default Sidebar;
