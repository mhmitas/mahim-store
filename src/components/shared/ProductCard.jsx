import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function ProductCard({ product }) {
    const { title, description, price, stockQuantity, category, image } = product

    return (
        <Card className="w-full mx-auto overflow-hidden drop-shadow-sm duration-300 group max-w-md cursor-default">
            <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={450}
                        height={450}
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105 w-full"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium text-sm">{category}</span>
                    <span className="text-foreground bg-muted px-2 py-1 rounded-full font-medium text-sm">In Stock {stockQuantity}</span>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 mt-2">{title}</CardTitle>
                <p className="line-clamp-2">{description}</p>
                <p className="font-bold mt-1">{price.toFixed(2)} BDT</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button variant="secondary" className="w-full">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}