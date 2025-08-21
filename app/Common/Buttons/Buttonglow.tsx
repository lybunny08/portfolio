import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Buttonglow() {
  return (
		<a
			href="mailto:hajaniaina.lydien@gmail.com"
			className="group relative px-[16px] py-[8px] cursor-pointer bg-[#070707] border border-[#FB756F] rounded-full text-[#FB756F] transition-shadow duration-300 hover:shadow-[0_0_12px_4px_#ea591f] flex flex-row items-center justify-center gap-[32px]"
		>
			<span className="relative z-20 block overflow-hidden transition-all">
				<span className="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-400 after:ease-expo after:content-['Get_in_touch'] group-hover:after:-translate-y-[100%] after:font-bold after:md:text-[22px] after:uppercase">
					<span className="flex transition-all duration-400 ease-expo group-hover:-translate-y-full uppercase font-bold text-[22px] md:text-[22px]">
						Get in touch
					</span>
				</span>
			</span>
			<ArrowUpRight />
		</a>
  )
}
