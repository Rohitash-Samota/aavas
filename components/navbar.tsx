"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              StyleStore
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {pathname !== "/login" && pathname !== "/signup" && (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    Login
                  </Button>
                </Link>
                <Button size="icon" variant="outline">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}