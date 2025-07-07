"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import NavMenuIcon from "../icons/NavMenuIcon";
import ThemeToggle from "./ThemeToggle";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const activePath = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<GSAPTimeline>(null);

  const mobileNavOverlayRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const mobileNavBgRef = useRef<HTMLDivElement>(null);
  const mobileNavListRef = useRef<HTMLUListElement>(null);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      if (
        !mobileNavOverlayRef.current ||
        !mobileNavBgRef.current ||
        !mobileNavListRef.current
      )
        return;

      const tl = gsap
        .timeline({ paused: true })
        .to(mobileNavOverlayRef.current, {
          opacity: 1,
          ease: "none",
          duration: 0.7,
        })
        .to(
          mobileNavBgRef.current,
          {
            clipPath: "circle(120% at 50% 100%)",
            ease: "none",
            duration: 0.7,
          },
          "<",
        )
        .from(mobileNavListRef.current.children, {
          opacity: 0,
          yPercent: 100,
          stagger: 0.1,
        });
      timelineRef.current = tl;
    },
    { scope: containerRef },
  );

  const getActiveLinkClasses = (href: string) => {
    const classes = "text-background dark:text-primary";

    if (activePath === "/" && href === "/") return classes;
    if (activePath !== "/" && href !== "/" && activePath.includes(href))
      return classes;

    return "";
  };

  const toggleMobileNav = contextSafe(() => {
    const tl = timelineRef.current;
    const overlay = mobileNavOverlayRef.current;
    const nav = mobileNavRef.current;
    const list = mobileNavListRef.current;

    const htmlElement = document.documentElement;

    if (!tl || !overlay || !nav || !list) return;

    if (htmlElement.classList.contains("overflow-hidden"))
      htmlElement.classList.remove("overflow-hidden");
    else htmlElement.classList.add("overflow-hidden");

    if (!isMobileNavOpen) {
      overlay.classList.remove("hidden");
      nav.classList.replace("hidden", "flex");
      tl.play().eventCallback("onComplete", () => {
        list.classList.replace("overflow-hidden", "overflow-auto");
      });
    } else {
      list.classList.replace("overflow-auto", "overflow-hidden");
      tl.reverse().eventCallback("onReverseComplete", () => {
        overlay.classList.add("hidden");
        nav.classList.replace("flex", "hidden");
      });
    }

    setIsMobileNavOpen((prev) => !prev);
  });

  return (
    <section
      ref={containerRef}
      className="fixed top-[1.5em] right-0 left-0 z-50"
    >
      <div className="px-container container mx-auto flex items-center justify-between">
        {/* Logo */}
        <p className="text-[20px] font-bold uppercase sm:text-[21px] md:text-[23px] lg:text-[24px] xl:text-[26px] 2xl:text-[27px]">
          Techcd
        </p>

        <nav className="hidden font-medium lg:flex lg:text-[18px] xl:text-[22px] 2xl:text-[26px]">
          <ul className="flex items-center gap-[1.5em]">
            {navLinks.map(({ href, placeholder }) => (
              <li key={href}>
                <Link href={href}>{placeholder}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex lg:gap-[1em] lg:text-[18px] xl:text-[22px] 2xl:text-[26px]">
          <ThemeToggle />

          <div className="text-background flex items-center justify-center gap-[0.5em] font-medium dark:text-[#00BDFF]">
            <Link href="/sign-up">
              <button className="uppercase">Signup</button>
            </Link>
            <div className="via-background dark:via-foreground h-full w-[1px] self-stretch bg-gradient-to-b from-transparent to-transparent"></div>
            <Link href="/sign-in">
              <button className="uppercase">Login</button>
            </Link>
          </div>
        </div>

        {/* Mobile nav toggle */}
        <button onClick={toggleMobileNav} className="lg:hidden">
          <NavMenuIcon className="w-[30px]" />
        </button>
      </div>

      <>
        {/* Mobile nav overlay */}
        <div
          ref={mobileNavOverlayRef}
          className="fixed inset-0 -z-[1] hidden bg-black/30 opacity-0 lg:hidden"
          onClick={toggleMobileNav}
        ></div>

        {/* Mobile nav */}
        <nav
          ref={mobileNavRef}
          className="text-foreground fixed right-0 bottom-0 left-0 hidden max-h-[70dvh] overflow-hidden rounded-t-[2em] px-[2em] py-[3em] text-[20px] sm:text-[21px] md:text-[23px] lg:hidden"
        >
          {/* Gradient bg */}
          <div
            ref={mobileNavBgRef}
            className="bg-background dark:from-background from-background absolute inset-0 -z-[1] bg-gradient-to-bl to-[#0A2A4A]"
            style={{ clipPath: "circle(0% at 50% 100%)" }}
          ></div>

          {/* Nav links */}
          <ul
            ref={mobileNavListRef}
            className="flex grow flex-col gap-[2em] overflow-hidden pr-[8px]"
          >
            {navLinks.map(({ href, placeholder }) => (
              <li key={href} className="text-center">
                <Link
                  href={href}
                  className={cn("w-fit", getActiveLinkClasses(href))}
                >
                  {placeholder}
                </Link>
                <hr className="border-t-foreground mt-[0.3em] opacity-20" />
              </li>
            ))}

            {/* Sign in/up */}
            <li className="dark:text-primary text-background flex justify-center gap-[0.5em] font-medium">
              <Link href="/sign-up">
                <button className="uppercase">Signup</button>
              </Link>
              <div className="via-background dark:via-foreground h-full w-[1px] bg-gradient-to-b from-transparent to-transparent"></div>
              <Link href="/sign-in">
                <button className="uppercase">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    </section>
  );
};

export default Navbar;
