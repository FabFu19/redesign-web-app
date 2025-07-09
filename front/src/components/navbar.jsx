import React, { useEffect, useRef, useState } from "react";
import '../styles/navbar.css'
import logo from '../assets/logo.png'
import logoBlue from '../assets/logoblue.png'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [isInANewEra, setIsInANewEra] = useState(true); 
  const searchRef = useRef();

  const {t} = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: t('navbar.industries'), href: '/industries', current: true },
    { name: t('navbar.services'), href: '/services', current: false },
    { name: t('navbar.products'), href: '/products', current: false },
    { name: t('navbar.about_us'), href: '/about-us', current: false },
  ].map((item) => ({
    ...item,
    current: location.pathname === item.href,
  }));

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    if (timeoutId) clearTimeout(timeoutId);

    if (!showSearch) {
      const id = setTimeout(() => {
        setShowSearch(false);
        setSearchValue("");
      }, 20000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setSearchValue("");
        if (timeoutId) clearTimeout(timeoutId);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [timeoutId]);

  const handleContact = () => {
    navigate('/');
  };


  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("a-new-era");
      if (!section) return;
  
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= 100;
  
      setIsInANewEra(isInView);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

    return(
        <>
          <Disclosure as="nav" className="justify-center flex w-full">
            <div className="mx-auto max-w-7xl px-2 w-full sm:px-6 lg:px-8 bg-white/10 backdrop-blur-md text-white shadow-md fixed z-50 rounded-2xl mt-6">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center mr-auto">
                    <img
                      alt="nttlogo"
                      loading="eager"
                      src={isInANewEra ? logo : logoBlue}
                      className="h-8 w-auto bg-cover"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? isInANewEra
                                ? "text-white"
                                : "text-[#0072BC]"
                              : isInANewEra
                              ? "text-gray-300 hover:text-white"
                              : "text-[#0072BC] hover:text-[#005B9E]",
                            "px-3 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex items-center transition-all duration-300 mr-4" ref={searchRef}>
                    <span
                      onClick={toggleSearch}
                      className="fa-solid fa-magnifying-glass cursor-pointer text-white hover:text-gray-300 mr-3"
                    ></span>
                    <div className={`overflow-hidden transition-all duration-300 ${showSearch ? "w-48" : "w-0"}`}>
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Buscar..."
                        className="w-full rounded-md border border-white-300 px-2 py-1 text-white shadow-md focus:outline-none focus:ring-2 bg-transparent"
                      />
                    </div>
                  </div>
                  <Link to="/" onClick={handleContact}>
                    <div className="bg-[#0072BC] rounded-full py-2 px-5">{t('navbar.contact')}</div>
                  </Link>
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="sr-only">Open user menu</span>
                    </MenuButton>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5">
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Your Profile
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Settings
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign out
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </>
    )
}