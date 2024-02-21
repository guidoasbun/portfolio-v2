"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavListMenu from "./nav-list-menu";
import projectMenuItems from "@/assets/projectMenuItems";
import contactMenuItems from "@/assets/contactMenuItems";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/" passHref>
        <Typography
          variant="h6" // Adjust the variant as needed
          color="blue-gray"
          className="cursor-pointer font-medium flex items-center text-sm" // Add additional styling as needed
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Typography>
      </Link>

      <Link href="/aboutMe" passHref>
        <Typography
          variant="h6" // Adjust the variant as needed
          color="blue-gray"
          className="cursor-pointer font-medium flex items-center text-sm" // Add additional styling as needed
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            About Me
          </ListItem>
        </Typography>
      </Link>

      <Link href="/workExperience" passHref>
        <Typography
          variant="h6" // Adjust the variant as needed
          color="blue-gray"
          className="cursor-pointer font-medium flex items-center text-sm" // Add additional styling as needed
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Work Experience
          </ListItem>
        </Typography>
      </Link>

      <Link href="/skills" passHref>
        <Typography
          variant="h6" // Adjust the variant as needed
          color="blue-gray"
          className="cursor-pointer font-medium flex items-center text-sm" // Add additional styling as needed
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Skills
          </ListItem>
        </Typography>
      </Link>

      <NavListMenu
        navListMenuItems={projectMenuItems}
        menuName={"Projects"}
        pageLink={"/projects"}
      />

      <NavListMenu
        navListMenuItems={contactMenuItems}
        menuName={"Contact Me"}
        pageLink={"/contactMe"}
      />
    </List>
  );
}

export default function MainHeader() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" variant="h6" className="mr-4  py-1.5 lg:ml-2">
          Guido Asbun
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* This centers everything */}
        <div className="hidden gap-2 lg:flex"></div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
