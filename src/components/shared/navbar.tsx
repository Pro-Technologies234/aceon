import { ArrowRight, Ellipsis } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
    return (
        <header className="w-full z-10 font-cabinet-grotesk fixed left-0 py-15 right-0" >
            <div className="max-w-7xl w-full flex justify-between m-auto" >
                <h1 className="text-4xl text-white" >ACEON</h1>
                <div className="flex gap-4 items-center" >
                    <Button size={'lg'} className=" uppercase rounded-full bg-gray-900 hover:bg-blue-700 text-white  cursor-pointer" >
                        <ArrowRight/>
                        Let&apos;s Talk
                    </Button>
                    <Button size={'lg'} className="group uppercase text-black rounded-full bg-white hover:bg-white cursor-pointer" >
                         Menu
                        <Ellipsis className="group-hover:rotate-90 transition-transform ease-in-out duration-500"  />
                    </Button>
                </div>
            </div>
        </header>
    )
}