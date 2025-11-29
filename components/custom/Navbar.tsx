"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LogIn, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useSimpleAuth } from "@/lib/auth/SimpleAuthProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const packagesDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Get auth state - safely handle if provider is not available
  let isAuthenticated = false;
  let user = null;
  try {
    const auth = useSimpleAuth();
    isAuthenticated = auth.isAuthenticated;
    user = auth.user;
  } catch (error) {
    // Auth provider not available, user is not authenticated
    isAuthenticated = false;
  }

  const packageCategories = [
    {
      name: "Website Services",
      href: "/packages/website-services",
      description: "Professional website design and development packages",
    },
    {
      name: "Website + Leads Guaranteed Services",
      href: "/packages/website-leads",
      description: "Website with guaranteed lead generation services",
    },
    {
      name: "E-Commerce Website Services With Admin Panel",
      href: "/packages/ecommerce",
      description: "Complete e-commerce solutions with admin panel",
    },
    {
      name: "Social Media, SEO & GMB Services",
      href: "/packages/social-seo",
      description: "Social media marketing, SEO, and Google My Business services",
    },
    {
      name: "Website Development One Time Set-up Packages",
      href: "/packages/one-time-setup",
      description: "One-time website development and setup packages",
    },
    {
      name: "Full Stack Website Services",
      href: "/packages/full-stack",
      description: "Complete full stack website, e-commerce, social media marketing, and lead generation",
    },
  ];

  const navLinks = [
    {
      name: "Home",
      href: "/",
      description: "Return to homepage",
    },
    {
      name: "About",
      href: "/about",
      description: "Learn more about our company",
    },
    {
      name: "Services",
      href: "/services",
      description: "View our services",
    },
    {
      name: "Live Projects",
      href: "/live-projects",
      description: "View our completed projects and live demos",
    },
    {
      name: "Our packages",
      href: "/packages",
      description: "View our packages and pricing",
      hasDropdown: true,
    },
    {
      name: "Blog",
      href: "/blog",
      description: "Read our latest AI insights and research",
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveIndex(-1);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveIndex(-1);
    // Return focus to menu button when closing
    buttonRef.current?.focus();
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % navLinks.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + navLinks.length) % navLinks.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(navLinks.length - 1);
        break;
      case "Escape":
        closeMenu();
        break;
    }
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMenuOpen) {
          closeMenu();
        }
        if (isPackagesDropdownOpen) {
          setIsPackagesDropdownOpen(false);
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isPackagesDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        packagesDropdownRef.current &&
        !packagesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPackagesDropdownOpen(false);
      }
    };

    if (isPackagesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPackagesDropdownOpen]);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a") as HTMLAnchorElement;
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    const headerEl = navRef.current;
    if (!headerEl) return;

    let isHidden = false;
    let headerHeight = headerEl.offsetHeight;
    gsap.set(headerEl, { y: 0, willChange: "transform" });

    const onResize = () => {
      headerHeight = headerEl.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrolled = self.scroll();
        // Keep visible when menu is open
        if (isMenuOpen) {
          if (isHidden) {
            isHidden = false;
          }
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        // Always show at the very top
        if (scrolled <= 0) {
          if (isHidden) {
            isHidden = false;
          }
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (self.direction === 1) {
          // Scrolling down → hide
          if (!isHidden) {
            isHidden = true;
            gsap.to(headerEl, {
              y: -headerHeight,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        } else if (self.direction === -1) {
          // Scrolling up → show
          if (isHidden) {
            isHidden = false;
            gsap.to(headerEl, { y: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
      gsap.set(headerEl, { y: 0 });
    };
  }, []);

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring !sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        ref={navRef}
        className="bg-background fixed inset-x-0 top-2 z-40 mx-auto w-full max-w-6xl rounded-lg px-5"
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between py-4"
            role="navigation"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="focus:ring-ring flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label="Techpotli - Return to homepage"
                aria-describedby="logo-description"
              >
                <Image
                  src="/New_Techpotli_Logo_(2)[2].png"
                  alt="Techpotli Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                  style={{ backgroundColor: 'transparent' }}
                />
                <span id="logo-description" className="sr-only">
                  Techpotli - Leading digital solutions provider
                </span>
              </Link>
            </div>

            <ul
              className="hidden items-center space-x-6 lg:flex"
              role="menubar"
              aria-label="Main navigation menu"
            >
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.href || (link.href.startsWith("/#") && pathname === "/");

                if (link.hasDropdown) {
                  return (
                    <li key={link.name} role="none" className="relative">
                      <div ref={packagesDropdownRef}>
                      <button
                        onClick={() => setIsPackagesDropdownOpen(!isPackagesDropdownOpen)}
                        onMouseEnter={() => setIsPackagesDropdownOpen(true)}
                        className={`text-text-heading hover:text-foreground focus:ring-ring rounded-md px-2 py-1 !text-sm font-medium transition-colors focus:ring-0 focus:outline-none flex items-center gap-1 ${
                          isActive ? "text-foreground font-normal" : "text-foreground/70"
                        }`}
                        role="menuitem"
                        aria-expanded={isPackagesDropdownOpen}
                        aria-haspopup="true"
                        aria-describedby={`nav-description-${index}`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isPackagesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span id={`nav-description-${index}`} className="sr-only">
                          {link.description}
                        </span>
                      </button>
                      {isPackagesDropdownOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-80 rounded-lg bg-white shadow-xl border border-gray-200 py-2 z-50"
                          onMouseLeave={() => setIsPackagesDropdownOpen(false)}
                        >
                          <div className="px-4 py-2 border-b border-gray-100">
                            <Link
                              href={link.href}
                              className="text-sm font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                              onClick={() => setIsPackagesDropdownOpen(false)}
                            >
                              View All Packages
                            </Link>
                          </div>
                          <ul className="py-2" role="menu">
                            {packageCategories.map((category, catIndex) => (
                              <li key={category.name} role="none">
                                <Link
                                  href={category.href}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:text-teal-700 transition-all duration-200"
                                  role="menuitem"
                                  onClick={() => setIsPackagesDropdownOpen(false)}
                                >
                                  <div className="font-medium">{category.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {category.description}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.name} role="none">
                    <Link
                      href={link.href}
                      className={`text-text-heading hover:text-foreground focus:ring-ring rounded-md px-2 py-1 !text-sm font-medium transition-colors focus:ring-0 focus:outline-none ${
                        isActive ? "text-foreground font-normal" : "text-foreground/70"
                      }`}
                      role="menuitem"
                      aria-describedby={`nav-description-${index}`}
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex(-1)}
                    >
                      {link.name}
                      <span id={`nav-description-${index}`} className="sr-only">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button
                    size={"sm"}
                    className="text-sm flex items-center gap-2"
                    aria-label="Go to dashboard"
                  >
                    <User className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/auth/simple">
                  <Button
                    size={"sm"}
                    className="text-sm flex items-center gap-2"
                    aria-label="Sign in to your account"
                  >
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md outline-none focus:ring-0 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-haspopup="true"
              >
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3 rotate-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-5 rotate-0"
                  }`}
                />
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden"
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="">
                <div className="space-y-2 px-2 py-4">
                  <ul className="space-y-2" role="menu" aria-label="Mobile navigation options">
                    {navLinks.map((link, index) => {
                      const isActive =
                        pathname === link.href || (link.href.startsWith("/#") && pathname === "/");

                      if (link.hasDropdown) {
                        return (
                          <li key={link.name} role="none" className="space-y-1">
                            <button
                              onClick={() => {
                                const newIndex = activeIndex === index ? -1 : index;
                                setActiveIndex(newIndex);
                              }}
                              className={`hover:bg-accent hover:text-accent-foreground w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none ${
                                activeIndex === index || isActive
                                  ? "bg-accent text-accent-foreground"
                                  : "text-foreground/70"
                              }`}
                              role="menuitem"
                              tabIndex={activeIndex === index ? 0 : -1}
                              aria-expanded={activeIndex === index}
                              aria-haspopup="true"
                            >
                              {link.name}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  activeIndex === index ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {activeIndex === index && (
                              <ul className="pl-4 space-y-1" role="menu">
                                <li role="none">
                                  <Link
                                    href={link.href}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                                    onClick={closeMenu}
                                  >
                                    View All Packages
                                  </Link>
                                </li>
                                {packageCategories.map((category) => (
                                  <li key={category.name} role="none">
                                    <Link
                                      href={category.href}
                                      className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:text-teal-700 transition-all duration-200"
                                      onClick={closeMenu}
                                    >
                                      {category.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      }

                      return (
                        <li key={link.name} role="none">
                          <Link
                            href={link.href}
                            className={`hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none ${
                              activeIndex === index || isActive
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/70"
                            }`}
                            role="menuitem"
                            tabIndex={activeIndex === index ? 0 : -1}
                            aria-describedby={`mobile-nav-description-${index}`}
                            onClick={closeMenu}
                            onKeyDown={(e) => handleKeyDown(e)}
                          >
                            {link.name}
                            <span id={`mobile-nav-description-${index}`} className="sr-only">
                              {link.description}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border-t pt-4 space-y-3">
                    {isAuthenticated ? (
                      <Link href="/dashboard" className="w-full">
                        <Button
                          className="w-full flex items-center justify-center gap-2"
                          aria-label="Go to dashboard"
                          onClick={closeMenu}
                        >
                          <User className="h-4 w-4" />
                          Dashboard
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/auth/simple" className="w-full">
                        <Button
                          className="w-full flex items-center justify-center gap-2"
                          aria-label="Sign in to your account"
                          onClick={closeMenu}
                        >
                          <LogIn className="h-4 w-4" />
                          Sign in
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
