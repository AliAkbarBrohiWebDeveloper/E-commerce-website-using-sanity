const manages=[
    
    {
id:1,
src:"/icon1.png",
header:"Membership Organisations",
paragraph:"Our membership management software provides full automation of membership renewals and payments"

},

{
    id:2,
    src:"/icon2.png",
    header:"National Associations",
    paragraph:"Our membership management software provides full automation of membership renewals and payments"
    
    },
    {
id:3,
src:"/icon3.png",
header:"Clubs And Groups",
paragraph:"Our membership management software provides full automation of membership renewals and payments"

},



]
import Image from 'next/image'
import Wrapper from './sharebale/Wrapper'

const Manage = () => {
  return (

    <Wrapper>
<section className='mt-16'>

<div className='text-center '>



    <h5 className='text-3xl font-bold'>Manage your entire community in a single system</h5>
    <p>Who is Nextcent suitable for?
    </p>
</div>
<div className='flex justify-between items-center mt-16 gap-5 flex-col md:flex-row'>

{manages.map((products)=>{


return(

<div key={products.id}>

<Image src={products.src} alt='icons' height={50} width={50} className='mx-36 md:mx-56'/>
<h3 className='text-xl text-center font-bold'>{products.header}</h3>
<p className='mt-4 text-center'>{products.paragraph}</p>


</div>


)
})}


</div>


</section>
</Wrapper>
  )
}

export default Manage