"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthLinks from "../auth-links/AuthLinks";
import Toggle from "../toggle/Toggle";
import Icon from "@mdi/react";
import { mdiClose, mdiMenu } from "@mdi/js";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="sticky bg-white w-full flex flex-row items-center justify-between p-2 md:p-4">
        <Link href="/" className="">
          <div className="flex flex-row items-center space-x-2">
            <img
              src="/gdg-logo.png"
              alt="GDG Logo"
              className="h-4 w-auto bg-white"
            />
            <span>GDG Cochabamba's Blog</span>
          </div>
        </Link>

        <div className="flex flex-row justify-end space-x-4">
          <div className="hidden md:flex flex-row space-x-4 items-center justify-end">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/about" className="hover:underline">
              Sobre nosotros
            </Link>

            {/* <Toggle /> */}
            <AuthLinks />
          </div>

          <button
            className="p-1 border border-gray-300 rounded-md md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Icon path={mdiMenu} size={1} />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 bottom-0 w-11/12 bg-blue md:-right-full ${
          sidebarOpen ? "right-0" : "-right-full hidden"
        }`}
      >
        <button
          className="mt-4 ml-4 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <Icon path={mdiClose} size={1.25} color="white" />
        </button>
        <div className="flex flex-col h-full content-center justify-center items-center text-white text-3xl space-y-6">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/about" className="hover:underline">
            Sobre nosotros
          </Link>
          <AuthLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;
