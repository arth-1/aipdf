'use client'

import { PlusCircleIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/compat/router'

function PlaceholderDocument() {
    const router = useRouter();

    const handleClick = () => {
      if (!router) {
        //check if user is free tier and apply file limit and then push to the upgrade page
        console.error('Router is not available');
        return;
      }
      router.push('/dashboard/upload');
    };
    

  return (
    <Button 
    onClick={handleClick}
    className='flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-16' />
        <p>
            Add Document
        </p>
    </Button>
  )
}

export default PlaceholderDocument