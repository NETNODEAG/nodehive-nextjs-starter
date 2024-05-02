'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Menu({ menu }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleClickButton = (id: string, hasSubMenu: boolean) => {
    if (!hasSubMenu) {
      setOpenDropdown(null);
      setIsDropdownOpen(false);
      return;
    }

    if (id === openDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
      setOpenDropdown(isDropdownOpen ? null : id);
    } else {
      setOpenDropdown(id);
      setIsDropdownOpen(true);
    }
  };

  const handleSubItemClick = () => {
    setOpenDropdown(null);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenDropdown(null);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navRef]);

  return (
    <nav ref={navRef} className="hidden md:block">
      <ul className="flex gap-8">
        {Object.values(menu)?.map((item: any) => (
          <li key={item.id}>
            {item.subMenu.length > 0 ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleClickButton(item.id, true);
                }}
                className="flex cursor-pointer items-center gap-1 font-semibold"
              >
                {item.title}
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isDropdownOpen && openDropdown === item.id
                      ? 'rotate-180'
                      : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <Link
                href={item.url}
                onClick={() => handleClickButton(item.id, false)}
                className="flex items-center gap-2 font-semibold"
              >
                {item.title}
              </Link>
            )}

            {isDropdownOpen && openDropdown === item.id && (
              <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                <ul className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/5">
                  {item.subMenu.map((subItem: any) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.url}
                        onClick={handleSubItemClick}
                        className="font-semibold"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
