import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Wrapper from "./sharebale/Wrapper"



const Hero = async  () => {

const heroSecdat= await client.fetch(`
    
    
     *[_type == "heroSection"][0] {
    heading,
    paragraph,
    buttonText,
    image
  }
    
    
    
    `)
    console.log(heroSecdat)
    

  return (
<Wrapper>

    <section className="mt-24">
<main className="flex justify-between items-center flex-col md:flex-row">

<div>
<h1 className="text-2xl font-bold">{heroSecdat.heading}</h1>
<p className="mt-3">{heroSecdat.paragraph}</p>
<button className="mt-5 px-6 py-2 font-bold bg-green-500 rounded-lg  text-white hover:scale-105">{heroSecdat.buttonText}</button>



</div>
<div>

<img src={urlFor(heroSecdat.image).url()} alt="hero-banner" height={400} width={400} className="mt-6 " />

</div>


</main>




    </section>
    </Wrapper>
  )


}

export default Hero