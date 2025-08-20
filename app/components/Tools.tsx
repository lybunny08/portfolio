import React from 'react'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import icon from '../../public/assets/icon.png'

interface ToolsProps {
  name: string
}

export default function Tools({ name }: ToolsProps) {
  return (
    <div className="flex flex-row gap-[16px] items-center">
      <Image
        src={icon}
        alt="icon"
        width={30}
        height={30}
        className="bg-[#bababa] rounded-sm"
      />
      <span>{name}</span>
    </div>
  );
}
