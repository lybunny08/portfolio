import React from 'react'
import TextReveal from '../Common/TextReveal'

export default function Availability() {
  return (
    <div className='flex flex-row gap-[24px] text-[#cacaca] text-[12px] leading-[12px] '>
			<div className='flex flex-row gap-[16px] '>
				<div className="size-[12px] rounded-full bg-[#3FBD4C] glow"></div>
				<div className='flex flex-col space-y-[8px] text-[#cacaca]'>
					<TextReveal>
						<span>Available for Freelance</span>
					</TextReveal>
					<TextReveal>
						<span className='uppercase'>August 2025</span>
					</TextReveal>
				</div>
			</div>
			<div className='flex flex-col gap-[8px]'>
				<TextReveal>
					<span>
						{new Date().toLocaleTimeString('en-US', {
							hour: '2-digit',
							minute: '2-digit',
							hour12: true,
							timeZone: 'Indian/Antananarivo'
						})}
					</span>
				</TextReveal>
				<TextReveal>
					<span className='uppercase'>(gmt + 2)</span>
				</TextReveal>
			</div>
		</div>
  )
}
