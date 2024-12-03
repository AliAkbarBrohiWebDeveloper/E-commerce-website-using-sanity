import Image from "next/image"
import Wrapper from "./sharebale/Wrapper"

const clientPhotoes=[
  

  {
id:1,
src:"/cl1.png"


},

  
{
  id:2,
  src:"/cl2.png"
  
  
  },

  
  {
    id:3,
    src:"/cl3.png"
    
    
    },

  
    {
      id:4,
      src:"/cl4.png"
      
      
      },

  
      {
        id:5,
        src:"/cl5.png"
        
        
        },

  
        {
          id:6,
          src:"/cl6.png"
          
          
          },

  
          {
            id:7,
            src:"/cl7.png"
            
            
            },
                                          


]



const Client = () => {
  return (

    <Wrapper>

<section className="mt-11">

<div className="text-center">

<h4 className="text-xl font-bold">Our Clients</h4>
<p className="mt-3">We have been working with some Fortune 500+ clients</p>


</div>
<div className="container grid grid-cols-4 md:grid-cols-7 mt-6">
{
clientPhotoes.map((item)=>{

return(


  <div key={item.id}>

<Image src={item.src} alt="clients" height={50} width={50}/>


  </div>
)

})


}


</div>


</section>



    </Wrapper>
  )
}

export default Client