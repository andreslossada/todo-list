import { columns } from "@/components/shared/Columns";

import Link from "next/link";
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  ListTodo as ListTodoIcon,
  List as ListIcon,
  NotebookTabs,
  Plus,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DataTable } from "../../components/shared/DataTable";
import { getData } from "@/lib/getData";
import { UserButton, auth, currentUser } from "@clerk/nextjs";

export default async function Dashboard() {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) return <>You are not logged in</>;

  console.log(`🚀 ~ user:`, user);

  const data = await getData();
  return (
    <div className="grid min-h-screen max-w-[1200px] mx-auto py-10 px-5 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-5 ">
      <div className="hidden  bg-muted/40 md:block ">
        <div className="flex h-full max-h-screen flex-col gap-5">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6 border border-gray-600 rounded-md">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ListTodoIcon className="h-6 w-6" />
              <span className="">ViewTasks</span>
            </Link>
          </div>
          <div className="flex-1 border border-gray-600 rounded-lg py-5 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg">
                <NotebookTabs className="h-4 w-4 " />
                Lists
              </div>
              <DropdownMenuSeparator className="bg-gray-600   " />
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-gray-900"
              >
                <ListIcon className="h-4 w-4" />
                Groceries
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {data.length}
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary hover:bg-gray-900"
              >
                <ListIcon className="h-4 w-4" />
                Work{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-gray-900"
              >
                <ListIcon className="h-4 w-4" />
                TV Series
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-gray-900"
              >
                <ListIcon className="h-4 w-4" />
                Shores
              </Link>
              <DropdownMenuSeparator className="bg-gray-600   " />
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-gray-900"
              >
                <Plus className="h-4 w-4 " />
                New List
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <header className="flex h-14 items-center gap-4 border border-gray-600 rounded-lg bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className=" mx-auto">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-xl ">
              <ListIcon className="h-4 w-4 " />
              Groceries
            </div>
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 border border-gray-600 rounded-lg">
          <DataTable columns={columns} data={data} />
        </main>
      </div>
    </div>
  );
}
