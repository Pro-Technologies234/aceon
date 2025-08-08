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
            <DropdownMenuItem className="text-2xl " >HOME</DropdownMenuItem>
            <DropdownMenuItem className="text-2xl " >ABOUT US</DropdownMenuItem>
            <DropdownMenuItem className="text-2xl " >WHY CHOOSE US</DropdownMenuItem>
            <DropdownMenuItem className="text-2xl " >CONTACT</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}