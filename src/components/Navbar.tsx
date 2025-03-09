"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">
          <Link href="/">Tyler Imbo</Link>
        </h1>
        <div className="flex space-x-6">
          <NavLink href="/" currentPath={pathname}>
            Home
          </NavLink>
          <NavLink href="/projects" currentPath={pathname}>
            Projects
          </NavLink>
          <NavLink href="/about" currentPath={pathname}>
            About
          </NavLink>
          <NavLink href="/contact" currentPath={pathname}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, currentPath, children }: { href: string; currentPath: string; children: string }) {
  const isActive = currentPath === href;
  return (
    <Link href={href} className={`hover:text-gray-300 ${isActive ? "text-yellow-400 font-bold" : ""}`}>
      {children}
    </Link>
  );
}
