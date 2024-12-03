import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import React from 'react'
import Wrapper from './sharebale/Wrapper';

const About =  async  () => {
const data=  await client.fetch(`
     *[_type == "aboutSection"][0] {
image,
  heading,
  paragraph,
  button

    
  }
    

    
    `)
    console.log(data);
    

  return (

    
    <Wrapper>
    <section className='mt-11' >

<main className="flex justify-between items-center gap-12 flex-col md:flex-row">
<div>

<img src={urlFor(data.image).url()} alt="middle-banner" height={1000} width={1000} className="mt-6 " />

</div>
<div>

<h3 className="text-xl font-bold">{data.heading}</h3>
<p className="mt-3">{data.paragraph}</p>
<button className="px-6 py-2 bg-green-500 rounded-lg text-white mt-3 hover:scale-105 duration-300 font-bold">{data.button}</button>


</div>


</main>




    </section>


</Wrapper>

    
  )
}

export default About