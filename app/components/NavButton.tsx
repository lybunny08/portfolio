import React from 'react'
import TextReveal from '../Common/TextReveal'

export default function NavButton() {
  return (
    <div className='flex flex-row text-[#cacaca] '>
			<TextReveal delay={0.1}>
				<a
					href="mailto:hajaniaina.lydien@gmail.com"
				 	className="group bg-[#070707] cursor-pointer px-[8px] md:px-[16px] py-[8px] flex items-center justify-center rounded-full uppercase text-[12px] leading-[12px] md:text-[14px] border border-[#cacaca]">
					<span className="relative z-20 block overflow-hidden transition-all">
						<span className="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-200 after:ease-expo after:content-['Book_a_call'] group-hover:after:-translate-y-[100%] after:font-medium after:text-[12px] after:md:text-[14px] after:uppercase">
							<span className="flex transition-all duration-200 ease-expo group-hover:-translate-y-full uppercase font-medium">
								Book a call
							</span>
						</span>
					</span>
				</a>
			</TextReveal>
			<button className=' bg-[#070707] rounded-full border boder-[#cacaca] px-[8px] md:px-[16px] '>
				<div className='h-[0.5px] w-[10px] bg-[#cacaca] mb-1 '></div>
				<div className='h-[0.5px] w-[10px] bg-[#cacaca] '></div>
			</button>
		</div>
  )
}
