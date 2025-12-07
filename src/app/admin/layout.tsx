import Link from "next/link";
import {
  Bell,
  Home,
  Waves,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { adminNav, contacts } from "@/lib/data";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-background text-foreground">
      <div className="hidden border-r border-black/20 bg-background/30 backdrop-blur-2xl md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-black/20 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Waves className="h-6 w-6 text-primary animate-bounce" />
              <span className="font-headline">Liquidfolio</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8 bg-transparent">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {adminNav.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <item.Icon className="h-4 w-4" />
                  {item.name}
                  {item.name === "Contacts" && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {contacts.length}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card className="bg-background/30 border-black/20 backdrop-blur-2xl">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-black/20 bg-background/30 backdrop-blur-2xl px-4 lg:h-[60px] lg:px-6">
           <Link href="/" className="text-muted-foreground hover:text-primary transition-colors md:hidden">
              <Home className="h-5 w-5" />
              <span className="sr-only">Back to site</span>
           </Link>
           <div className="w-full flex-1 font-headline">Admin Dashboard</div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
