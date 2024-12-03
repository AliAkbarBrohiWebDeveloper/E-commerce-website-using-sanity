import Image from "next/image"
import Wrapper from "./sharebale/Wrapper"

const icons=[

{
    id:1,
    icon:"/ic1.png",
    numbers:"2,245,341",
    para:"Members"
},
{
id:2,
icon:"/ic2.png",
numbers:"828,867",
para:"Event Bookings"
},
{

     id:3,
    icon:"/ic3.png",
    numbers:"46,3281",
    para:"Clubs"
    },

    {
        id:4,
        icon:"/ic4.png",
        numbers:"1,926,436",
        para:"Paymentss"
        },


]



const Help = () => {
  return (
    <Wrapper>

<section className="mt-20">

<main className="flex  justify-between  items-center gap-36 flex-col md:flex-row">


<div>

<h6 className="text-2xl font-bold">Helping a local business reinvent itself</h6>
<p >We reached here with our hard work and dedication</p>




</div>
<div className="container grid grid-cols-2 md:grid-cols-2">

{
icons.map((items)=>{

    return(

        <div key={items.id}>

            <Image src={items.icon} alt="icons" height={50} width={50}/>
            <h5 className="text-xl font-bold ">{items.numbers}</h5>
            <p>{items.para}</p>




        </div>
    )
})

}


</div>


</main>



</section>


    </Wrapper>
  )
}

export default Help