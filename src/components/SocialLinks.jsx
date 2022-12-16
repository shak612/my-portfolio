import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shakir-mansuri-968715209",
      style: "bg-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shak612",
      style: "bg-[#333333]",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shakirmansuri612@gmail.com",
      style: "bg-[#6fc2b0]",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./assets/Resume.pdf",
      download: true,
      style: "bg-[#565f69]",
    },
  ];
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${style}`}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
