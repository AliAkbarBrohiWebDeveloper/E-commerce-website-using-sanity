
import About from '@/components/about'
import Client from '@/components/client'
import Customer from '@/components/Customer'
import Help from '@/components/Help'
import Hero from '@/components/Hero'
import Manage from '@/components/mange'
import Market from '@/components/market'
import Middle from '@/components/middle'
import React from 'react'


const page = () => {
  return (
    <div>

<Hero/>
<Client/>
<Manage/>
<Middle/>
<Help/>
<About/>
<Customer/>
<Market/>

    </div>
  )
}

export default page