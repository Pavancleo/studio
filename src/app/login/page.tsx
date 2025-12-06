import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Waves } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <Card className="mx-auto max-w-sm bg-black/30 backdrop-blur-2xl border-white/20 text-white">
        <CardHeader>
          <div className="flex justify-center mb-4">
             <Waves className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          <CardDescription className="text-center text-slate-300">
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="bg-slate-800/60 border-white/20"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required className="bg-slate-800/60 border-white/20" />
            </div>
            <Button type="submit" className="w-full" asChild>
                <Link href="/admin">
                    Login
                </Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link href="/" className="underline">
              Back to main site
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
