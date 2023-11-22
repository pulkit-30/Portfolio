"use client";
import { Avatar, Badge, Flex, Tooltip } from "@radix-ui/themes";
import GlassBg from "../Glass";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const headerItems = [
    {
      title: "Introduction",
      path: "/",
    },
    {
      title: "Experience",
      path: "/ex",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header>
      <nav>
        <GlassBg className="py-8 border-b">
          <Flex gap="4" align="center" justify="between">
            <Flex gap="2" align="center">
              <Avatar fallback="P" color="indigo" />
              <Flex direction="column">
                Pulkit Gupta
                <Badge variant="soft">Full Stack Developer</Badge>
              </Flex>
            </Flex>
            <ul className="flex gap-4 items-center text-white mr-5">
              {headerItems.map(({ title, path }) => (
                <li className="list-none" key={title}>
                  <Tooltip content={title}>
                    <Link
                      href={path}
                      className={`no-underline text-white ${
                        path === pathName
                          ? "bg-indigo-600 px-2 py-1 rounded"
                          : ""
                      }`}
                    >
                      {title}
                    </Link>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </Flex>
        </GlassBg>
      </nav>
    </header>
  );
};

export default Header;
