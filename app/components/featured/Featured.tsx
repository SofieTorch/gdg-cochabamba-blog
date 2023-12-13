"use client";
import React from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiPenPlus } from "@mdi/js";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Featured = () => {
  const { status } = useSession();

  return (
    <div className="bg-yellow-pattern py-14 justify-center">
      <div>
        <div className="bg-white inline-flex flex-row items-center space-x-4 pl-4 md:pl-8 lg:px-16 pt-4 md:pt-8 pr-4 md:pr-8 border-b-2 border-white">
          <Image
            src="/gdg-logo.png"
            alt="GDG Logo"
            className="h-6 md:h-10 w-auto bg-white"
            width={1030.91}
            height={500}
          />
          <div className="text-xl md:text-2xl">
            <p>Google Developer Groups</p>
            <p>Cochabamba</p>
          </div>
        </div>

        <h1 className="font-bold text-4xl md:text-6xl px-4 md:px-8 lg:px-16 pt-8 bg-white m-0">
          Una comunidad llena de aprendizaje
        </h1>
        <p className="text-lg md:text-2xl bg-white px-4 md:px-8 lg:px-16 pb-8 pt-6">
          Aprende, crea y comparte con la comunidad tech más grande de
          Cochabamba ¡Bienvenido/a a nuestro blog!
        </p>

        <div className="inline-flex bg-white pl-4 md:pl-8 lg:px-16 pb-8 pr-8 border-t-2 border-white">
          {status !== "authenticated" ? (
            <Link
              href="/login"
              className="btn-primary text-lg md:text-2xl"
              type="button"
            >
              <span>Unirme</span>
              <Icon path={mdiArrowRight} size={1.25} color="white" />
            </Link>
          ) : (
            <Link
              href="/write"
              className="btn-primary text-lg md:text-2xl"
              type="button"
            >
              <span>Crear nuevo post</span>
              <Icon path={mdiPenPlus} size={1} color="white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
