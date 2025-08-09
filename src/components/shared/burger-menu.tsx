import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { Ellipsis } from "lucide-react"
import Link from "next/link"


export function BurgerMenu() {
    return(
        <DropdownMenu  >
        <DropdownMenuTrigger>
            <Button size={'lg'} className="group uppercase text-black rounded-full bg-white hover:bg-white cursor-pointer" >
                    <span>Menu</span>
                <Ellipsis className="group-hover:rotate-90 transition-transform ease-in-out duration-500"  />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[90dvw] space-y-1 md:w-80 rounded-2xl" >
            <DropdownMenuLabel>ACEON TENNIS BALLS</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={'#home'} ><DropdownMenuItem className="text-lg " >  HOME</DropdownMenuItem></Link>
            <Link href={'#about_us'} ><DropdownMenuItem className="text-lg " >  ABOUT US</DropdownMenuItem></Link>
            <Link href={'#why_choose_us'} ><DropdownMenuItem className="text-lg " >  WHY CHOOSE US</DropdownMenuItem></Link>
            <Link href={'#contact'} ><DropdownMenuItem className="text-lg " >  CONTACT</DropdownMenuItem></Link>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}