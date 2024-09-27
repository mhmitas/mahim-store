import { ArrowRight } from "lucide-react"

export default function Component() {
    return (
        <section className="w-full bg-[url('/images/hero-2.jpg')] bg-cover bg-center bg-no-repeat ">
            <div className="flex flex-col items-center justify-center space-y-6 px-4 text-center text-white py-32 md:py-36 lg:py-48 bg-black/40">
                <div className="space-y-3 my-container text-center">
                    <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl">
                        Unleash Your Creativity
                    </h1>
                    <p className="max-w-[700px] text-lg md:text-xl font-bold leading-6 mx-auto">
                        Discover a world of endless possibilities, where your ideas come to life. Join us on an extraordinary
                        journey of innovation and self-expression.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary p-4 px-8 py-3 font-medium text-primary-foreground transition duration-300 ease-out hover:bg-primary/90"
                        aria-label="Get Started"
                    >
                        <span className="absolute right-0 translate-x-full transition-transform duration-300 ease-out group-hover:-translate-x-4">
                            <ArrowRight className="h-5 w-5" />
                        </span>
                        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-4">
                            Get Started
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}