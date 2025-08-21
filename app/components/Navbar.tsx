import React from 'react'
import Availability from './Availability'
import NavButton from './NavButton'
import MagneticText from './MagneticText'

export default function Navbar() {
  return (
    <div className="fixed w-full top-[21px] z-20">
			<nav className="flex flex-wrap space-y-[16px] md:space-y-0 md:flex-row w-full justify-between items-center px-[15px] md:px-[30px]">
				<MagneticText intensity={0.25}>
					<span className="hidden sm:block uppercase text-[#cacaca] text-[16px] md:text-[24px] font-extrabold">
						Hajaniaina
					</span>
				</MagneticText>
				{/* Nav + Availability pour md et lg */}
				<div className="hidden sm:block">
					<div className="flex flex-row gap-[24px]">
						<Availability />
						<NavButton />
					</div>
				</div>

				{/* Mobile version */}
				<div className="sm:hidden flex flex-col w-full gap-[16px]">
					<div className="flex flex-row justify-between items-center">
						<span className="uppercase text-[#cacaca] text-[16px] font-extrabold">
							Hajaniaina
						</span>
						<NavButton />
					</div>
					<Availability />
				</div>
			</nav>
		</div>
  )
}