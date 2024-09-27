import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-14">
            <div className="my-container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">About Us</h2>
                        <p className="text-sm">
                            We are passionate about providing high-quality stationery products to unleash your creativity and enhance your productivity.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><Link href="/shop" className="text-sm hover:text-white transition-colors">Shop</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
                        <address className="not-italic text-sm">
                            <p>123 Stationery Street</p>
                            <p>Pen City, PC 12345</p>
                            <p>Email: info@stationerystore.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </address>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Newsletter</h2>
                        <p className="text-sm mb-2">Stay updated with our latest offers and products.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                            />
                            <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm">&copy; 2024 Stationery Store. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}