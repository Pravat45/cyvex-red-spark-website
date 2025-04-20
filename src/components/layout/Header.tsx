import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Briefcase, 
  Settings, 
  Code, 
  Info, 
  Book, 
  Mail 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import CyvexLogo from "@/assets/cyvex-logo.svg";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Industries", path: "/industries", icon: Briefcase },
  { name: "Services", path: "/services", icon: Settings },
  { name: "Technologies", path: "/technologies", icon: Code },
  { name: "Work", path: "/work", icon: Briefcase },
  { name: "About", path: "/about", icon: Info },
  { name: "Career", path: "/career", icon: Briefcase },
  { name: "Blog", path: "/blog", icon: Book },
  { name: "Contact Us", path: "/contact", icon: Mail },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center">
          <img 
            src={CyvexLogo} 
            alt="Cyvex Labs Logo" 
            className="h-10 w-10 mr-3" 
          />
          <span className="text-2xl font-bold text-cyvex">
            Cyvex Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-cyvex transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-2 bg-cyvex hover:bg-cyvex-dark">
                Get in Touch
              </Button>
            </Link>
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-700 hover:text-cyvex transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="mt-4 w-full bg-cyvex hover:bg-cyvex-dark">
                    Get in Touch
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};
