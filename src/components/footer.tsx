
const Footer = () => {
  return (

    <footer className="mt-20 bg-black text-white h-[300px] w-auto">
<div className="container grid grid-cols-2 md:grid-cols-4 mx-3 py-3">

<div>

<ul>

<li className="text-xl font-bold">Nexcent</li>
<li className="mt-3">Copyright © 2020 Nexcent ltd.</li>
<li>All rights resoverd</li>



</ul>



</div>
<div>
<ul>

<li className="text-xl font-bold">Company</li>
<li className="mt-3">About us</li>
<li>Blog</li>
<li>Contact us</li>
<li>Pricing</li>
<li>Testimonials</li>

</ul>



</div>
<div>
<ul>

<li className="text-xl font-bold">Support</li>
<li className="mt-3">Help center</li>
<li>Terms of service</li>
<li>Legal</li>
<li>Privacy policy</li>
<li>Status</li>


</ul>



</div>
<div>



    <ul>

        <li className="text-xl font-bold mt-3">Stay up to date</li>
        <li>

<input type="email " placeholder="Enter  your email" required  className="mt-3 rounded-lg"/>


        </li>
    </ul>
</div>




</div>




    </footer>

  )
}

export default Footer