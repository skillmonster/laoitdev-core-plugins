import React from "react";
<%_ if (!features.includes("svgr")) { _%>
  import Image from "next/image";
<%_ } _%>
<%_ if (features.includes("svgr")) { _%>
  import { PankodIcon, GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from "@components/icons";
<%_ } _%>

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-5 bg-gray-800">
      <a href="http://pankod.com" target="_blank" className="block mb-3">
          <%_ if (features.includes("svgr")) { _%>
              <PankodIcon className="text-white mx-auto" width="140" height="28" />
          <%_ } else { _%>
              <Image src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
          <%_ } _%>
      </a>

      <ul className="flex justify-center list-none p-0 m-0">
        <li className="mx-3">
          <%_ if (features.includes("svgr")) { _%>
              <GithubIcon color="white" width="28" height="29" />
          <%_ } else { _%>
              <Image src="/icons/github-icon.svg" alt="github" width="28" height="29" />
          <%_ } _%>
        </li>
        <li className="mx-3">
        <%_ if (features.includes("svgr")) { _%>
              <TwitterIcon color="white" width="28" height="28" />
          <%_ } else { _%>
              <Image src="/icons/twitter-icon.svg" alt="nextjs" width="28" height="28" />
          <%_ } _%>
        </li>
        <li className="mx-3">
        <%_ if (features.includes("svgr")) { _%>
              <YoutubeIcon color="white" width="28" height="29" />
          <%_ } else { _%>
              <Image src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
          <%_ } _%>
        </li>
        <li className="mx-3">
        <%_ if (features.includes("svgr")) { _%>
              <LinkedinIcon color="white" width="28" height="32" />
          <%_ } else { _%>
              <Image src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
          <%_ } _%>
        </li>
      </ul>
    </div>
  );
};