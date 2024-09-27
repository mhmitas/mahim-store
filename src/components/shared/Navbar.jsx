import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default async function Navbar() {

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm dark:border-b">
            <div className="my-container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="">
                            <div className="w-max flex items-center gap-2">
                                <img className="w-6 sm:w-9" src="/images/logo.png" alt="logo" width={10} height={10} />
                                <span className="text-xl md:text-3xl font-extrabold">Mahim Store</span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-foreground hover:bg-muted font-medium px-3 py-2 rounded-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* sign in user's section */}
                        <Button className="hidden md:flex" size="sm">Sign In</Button>
                        {/* small device menu */}
                        <div className="md:hidden flex items-center gap-1">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild title="Navigation menu">
                                    <Button variant="outline" size="icon" className="focus-visible:ring-0 focus:ring-0 size-9">
                                        <Menu className="size-[22px]" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    {navItems.map((item) => (
                                        <DropdownMenuItem key={item.name} asChild>
                                            <Link href={item.href}>{item.name}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                    <DropdownMenuItem asChild>
                                        <Link href="/">Sign In</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}