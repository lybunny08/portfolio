import React from 'react'
import Availability from './Availability'
import NavButton from './NavButton'

export default function Navbar() {
  return (
    <div className='fixed w-full top-[21px] z-20'>
			<nav className='flex flex-wrap space-y-[16px] lg:flex-row w-full justify-between items-center px-[15px] md:px-[30px] '>
				<span className='uppercase text-[#cacaca] text-[16px] md:text-[24px] font-extrabold '>Hajaniaina</span>
				<div className='hidden lg:block'>
					<div className='flex flex-row gap-[24px]'>
						<Availability />
						<NavButton />
					</div>
				</div>
				<div className='lg:hidden'>
					<NavButton />
				</div>
				<div className='lg:hidden'>
					<Availability />
				</div>
			</nav>
		</div>
  )
}