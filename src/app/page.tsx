import Image from "next/image";
import HomePageImage from "@/assets/programmer.svg";
import { Badge, Button, Flex, Heading, Text } from "@radix-ui/themes";
import {
  BookmarkIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ResumeIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="px-24">
      <Flex
        direction="row"
        wrap="wrap"
        gap="2"
        align="center"
        justify="between"
        className="py-20"
      >
        <Flex gap="5" direction="column" className="w-1/2">
          <div className="text-3xl">Hello World!</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            cumque?
          </p>
          <div className="space-x-4">
            <Button>
              Resume
              <BookmarkIcon />
            </Button>
            <Button variant="outline">
              Contact
              <EnvelopeClosedIcon />
            </Button>
          </div>
        </Flex>
        <div className="relative">
          <div className="">
            <Image alt="" src={HomePageImage} width={500} height={500} />
          </div>
          <div className="border-2 w-72 h-72 absolute -top-5 right-0 rounded-full  border-dashed border-slate-500 border-opacity-10">
            <div className="absolute top-5 right-5">
              <GitHubLogoIcon width={30} height={30} />
            </div>
            <div className="absolute top-5 left-5">
              <LinkedInLogoIcon width={30} height={30} />
            </div>
            <div className="absolute bottom-5 right-5">
              <TwitterLogoIcon type="outlined" width={30} height={30} />
            </div>
          </div>
        </div>
      </Flex>
    </main>
  );
}
