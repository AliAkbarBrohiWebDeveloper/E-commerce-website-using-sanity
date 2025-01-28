import { client } from "@/sanity/lib/client"
import Wrapper from "./sharebale/Wrapper";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";




const Navbar =  async () => {

const res=await client.fetch(`
  
   *[_type == "navbar"]{
  
    home,
    service,
    feature,
    product,
    testimonial,
    faq,
    button1,
    button2
    
}[0]
  
  
  `)
  console.log(res);
  

  return (
    <Wrapper>
    
    <header className="flex justify-between">

<div>
<h3  className="text-3xl font-bold">Nexcent</h3>
</div>

<nav>
<ul className="justify-between items-center gap-x-6 hidden md:flex font-bold">
<li>{res.home}</li>
<li>{res.service}</li>
<li>{res.feature}</li>
<li>{res.product}</li>
<li>{res.testimonial}</li>
<li>{res.faq}</li>

<button className="text-green-500">{res.button1}</button>
<button className="px-2 py-1 bg-green-600 text-white rounded-lg hover:scale-105 duration-300">{res.button2}</button>

</ul>



<Sheet>
  <SheetTrigger className="md:hidden sm:block"><Menu/></SheetTrigger>
  <SheetContent side="left">
    <SheetHeader >
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <ul className="flex flex-col gap-y-6 text-xl font-bold">
<li>{res.home}</li>
<li>{res.service}</li>
<li>{res.feature}</li>
<li>{res.product}</li>
<li>{res.testimonial}</li>
<li>{res.faq}</li>
</ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>




</nav>



    </header>
    
</Wrapper>
  )
}

export default Navbar