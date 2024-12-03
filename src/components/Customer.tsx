import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Wrapper from "./sharebale/Wrapper";



const Customer = async () => {

const result=await client.fetch(`
    

*[_type == "customerSection"][0] {
image,
  paragraph,
  span
  

    
  }

    
    `)
    console.log(result);
    

  return (


    <Wrapper>
    <section className='mt-11' >

<main className="flex justify-between items-center gap-12 flex-col md:flex-row">
<div>

<img src={urlFor(result.image).url()} alt="middle-banner" height={1000} width={1000} className="mt-6 " />

</div>
<div>

<p className="mt-3">{result.paragraph}</p>
<span className="text-green-800 font-bold">{result.span}</span>


</div>


</main>




    </section>


</Wrapper>

    
  )
}

export default Customer