import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { BurgerMenu } from "./burger-menu";

export function Navbar() {
    return (
        <header className="w-full z-10 font-cabinet-grotesk fixed left-0 py-10 md:py-15 not-lg:px-4 right-0" >
            <div className="max-w-7xl  w-full flex justify-between m-auto" >
                <h1 className="text-4xl text-white" >ACEON</h1>
                <div className="flex gap-4 items-center" >
                    <Button size={'lg'} className=" uppercase not-md:hidden rounded-full bg-gray-900 hover:bg-blue-700 text-white  cursor-pointer" >
                        <ArrowRight/>
                        Let&apos;s Talk
                    </Button>
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    )
}