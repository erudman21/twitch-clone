import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import logo from "../../media/logo.png";
import { NBProps } from "../../types/NavbarProps";

const LeftNavbar: React.FC<NBProps> = ({ user }) => {
  const categories = ["Browse", "Divider", "Esports", "Music"];
  if (user) {
    categories.unshift("Following");
  }

  const router = useRouter();

  return (
    <div className="flex flex-grow flex-shrink w-full items-stretch justify-start flex-nowrap">
      <div className="inline-flex p-4 cursor-pointer w-50 h-50 mt-1">
        <Link href="/" passHref>
          <a>
            <Image
              alt="Logo Icon"
              src={logo.src}
              width={24}
              height={28}
            ></Image>
          </a>
        </Link>
      </div>
      <div className="flex content-between flex-row items-center h-full">
        {categories.map((category) => {
          if (category === "Divider") {
            return (
              <div key={category} className="h-3/5 w-1p bg-nav-divider"></div>
            );
          }

          const active = router.pathname.includes(category.toLowerCase());

          return (
            <div
              key={category}
              className="pl-8 pr-8 flex flex-col hover:text-button-hover active:text-button-hover h-full"
            >
              <div className="flex self-center h-full">
                <Link href={`/${category.toLowerCase()}`} passHref>
                  <a
                    className={`items-center flex text-center whitespace-nowrap ${
                      active ? "text-button-hover" : ""
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="flex">
                        <p className="leading-heading text-4 font-semibold">
                          {category}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                className={`h-active-indicator ${
                  active ? "" : "nav-bar-indicator"
                }`}
              >
                <div className="bg-button-hover h-active-indicator -mb-1"></div>
              </div>
            </div>
          );
        })}
      </div>
      {/* TODO: FINISH BUTTON FUNCTIONALITY */}
      <div className="flex h-full items-center pl-4 pr-4">
        <div className="inline-block relative">
          <button className="icon-button-default">
            <HiDotsVertical className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
