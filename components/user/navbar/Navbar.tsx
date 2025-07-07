"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import NavMenuIcon from "../icons/NavMenuIcon";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const activePath = usePathname();
  const containerRef = useRef<HTMLElement>(null);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useGSAP(
    () => {
      // Mobile nav entry timeline
      const entryTimeline = gsap
        .timeline({
          paused: true,
          onComplete: () => {
            gsap.set(".mobile-nav-list", { overflow: "auto" });
            setIsAnimating(false);
          },
        })
        .to(".mobile-nav-bg", {
          clipPath: "circle(120% at 50% 100%)",
          ease: "none",
          duration: 0.7,
        })
        .to(".mobile-nav-item", { opacity: 1, yPercent: 0, stagger: 0.1 });

      // Mobile nav exit timeline
      const exitTimeline = gsap
        .timeline({
          paused: true,
          onComplete: () => {
            setDisplayMobileNav(false);
            setIsAnimating(false);
          },
        })
        .fromTo(
          ".mobile-nav-item",
          { opacity: 1, yPercent: 0 },
          { opacity: 0, yPercent: 100, stagger: 0.1 },
        )
        .to(
          ".mobile-nav-bg",
          {
            clipPath: "circle(0% at 50% 100%)",
            ease: "none",
            duration: 0.7,
          },
          "<+0.3",
        );

      if (isMobileNavOpen) {
        setIsAnimating(true);
        gsap.set(".mobile-nav-item", { opacity: 0, yPercent: 100 });
        entryTimeline.play();
      }

      if (!isMobileNavOpen && displayMobileNav) {
        setIsAnimating(true);
        gsap.set(".mobile-nav-list", { overflow: "hidden" });
        exitTimeline.play();
      }
    },
    { scope: containerRef, dependencies: [isMobileNavOpen] },
  );

  const getActiveLinkClasses = (href: string) => {
    const classes = "text-background dark:text-primary";

    if (activePath === "/" && href === "/") return classes;
    if (activePath !== "/" && href !== "/" && activePath.includes(href))
      return classes;

    return "";
  };

  const toggleMobileNav = () => {
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains("overflow-hidden"))
      htmlElement.classList.remove("overflow-hidden");
    else htmlElement.classList.add("overflow-hidden");

    if (!displayMobileNav) {
      setDisplayMobileNav(true);
      setIsMobileNavOpen(true);
    } else {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="fixed top-[1.5em] right-0 left-0 z-50"
    >
      <div className="px-container container mx-auto flex items-center justify-between">
        {/* Logo */}
        <p className="text-[20px] font-bold uppercase">Techcd</p>

        {/* Mobile nav toggle */}
        <button onClick={toggleMobileNav} disabled={isAnimating}>
          <NavMenuIcon className="w-[30px]" />
        </button>
      </div>

      {displayMobileNav && (
        <>
          {/* Mobile nav overlay */}
          <div
            className={cn(
              "fixed inset-0 -z-[1] bg-black/30",
              isAnimating && "pointer-events-none",
            )}
            onClick={toggleMobileNav}
          ></div>

          {/* Mobile nav */}
          <nav className="text-foreground fixed right-0 bottom-0 left-0 flex max-h-[70vh] overflow-hidden rounded-t-[2em] px-[2em] py-[3em] text-[20px]">
            {/* Gradient bg */}
            <div
              className="bg-background dark:from-background from-background mobile-nav-bg absolute inset-0 -z-[1] bg-gradient-to-bl to-[#0A2A4A]"
              style={{ clipPath: "circle(0% at 50% 100%)" }}
            ></div>

            {/* Nav links */}
            <ul className="mobile-nav-list flex grow flex-col gap-[2em] overflow-hidden pr-[8px]">
              {navLinks.map(({ href, placeholder }) => (
                <li
                  key={href}
                  className="mobile-nav-item bg-amber-300/0 text-center"
                >
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
              <li className="dark:text-primary mobile-nav-item text-background flex justify-center gap-[0.5em] font-medium">
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
      )}
    </section>
  );
};

export default Navbar;
