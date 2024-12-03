import Image from "next/image"
import Wrapper from "./sharebale/Wrapper"

const MarketPhotoes=[

{
    id:1,
    src:"/market1.png",
    header:"Creating Streamlined Safeguarding Processes with OneRen",
    para:"Readmore"
},
{
    id:2,
    src:"/market2.png",
    header:"What are your safeguarding responsibilities and how can you manage them?",
    para:"Readmore"
},
{
    id:3,
    src:"/market3.png",
    header:"Revamping the Membership Model with Triathlon Australia",
    para:"Readmore"
},


]



const Market = () => {
  return (
  
  <Wrapper>

<section className="mt-20">


    <div className="text-center">

<h4 className="text-2xl  font-bold ">Caring is the new marketing</h4>
<p className="mt-3">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

    </div>
<div className="flex justify-evenly items-center flex-col md:flex-row text-center mt-8 ">

{
    MarketPhotoes.map((product)=>{

return(

<div key={product.id} className="mt-5">
<Image src={product.src} alt="photoes" height={200} width={200} className="mx-20"/>
<h5 className="text-xl text-center">{product.header}</h5>
<p className="text-green-600 text-xl mt-3 font-bold">{product.para}</p>



</div>



)

    })
}



</div>

<div className="mt-16 text-center">
<h5 className="text-3xl font-bold">Pellentesque suscipit fringilla libero eu.</h5>
<button className="px-6 py-2 bg-green-500 text-white rounded-lg mt-4 hover:scale-105 duration-300">Get a Demo</button>


</div>



</section>




  </Wrapper>

    
  )
}

export default Market