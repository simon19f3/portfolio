import React from 'react';
import Link from 'next/link';

function Contacts() {
  return (
    <div className="mx-40">
        <div className=' text-7xl'>Contacts</div>
        <div className='grid grid-cols-2 mt-10'>
            <div className='mr-10 mb-12'>
                <div className='text-2xl'>Email</div>
                <div className='text-xl'> Name</div>
                <div className='text-xl'> description</div>
            </div>
            <div className='mr-10 mb-12'>
                <div className='text-2xl'><Link href="https://mail.google.com/mail/u/0/#inbox">email</Link></div>
                <div className='text-xl'> </div>
                <div className='text-xl'> description</div>
            </div>
        </div>
    </div>
  )
}

export default Contacts;