import React from 'react'

export default function Availability() {
  return (
    <div className='flex flex-row gap-[24px] text-[#cacaca] text-[12px] leading-[12px] '>
			<div className='flex flex-row gap-[16px] '>
				<div className="size-[12px] rounded-full bg-[#3FBD4C] animate-pulse"></div>
				<div className='flex flex-col space-y-[8px] text-[#cacaca]'>
					<span>Available for Freelance</span>
					<span className='uppercase'>August 2025</span>
				</div>
			</div>
			<div className='flex flex-col gap-[8px]'>
				<span>08:45 PM</span>
				<span className='uppercase'>(gmt + 2)</span>
			</div>
		</div>
  )
}
