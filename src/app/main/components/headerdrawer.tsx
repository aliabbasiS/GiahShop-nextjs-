'use client';

import * as React from 'react';
import Link from "next/link";
import NextImage from "../../../../Components/imagemaker";

interface HeaderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeaderDrawer({ isOpen, onClose }: HeaderDrawerProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-white/20 transition-opacity duration-700 ease-in-out z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-700 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-2xl font-bold text-green-600">گیاه لند</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <NextImage
                url="/header/close.svg"
                width={24}
                height={24}
                alt="close"
              />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold text-green-600"
                  onClick={onClose}
                >
                  <NextImage
                    url="/header/Vector.svg"
                    width={20}
                    height={20}
                    alt="home"
                  />
                  صحفه ی اصلی
                </Link>
              </li>
              <li>
                <Link 
                  href="/doctor" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold text-black"
                  onClick={onClose}
                >
                  <NextImage
                    url="/header/Vector.svg"
                    width={20}
                    height={20}
                    alt="doctor"
                  />
                  گیاه پزشک
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold text-black"
                  onClick={onClose}
                >
                  <NextImage
                    url="/header/Vector.svg"
                    width={20}
                    height={20}
                    alt="blog"
                  />
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold text-black"
                  onClick={onClose}
                >
                  <NextImage
                    url="/header/Vector.svg"
                    width={20}
                    height={20}
                    alt="about"
                  />
                  درباره ما
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <button className="w-full border py-3 px-4 text-green-700 font-semibold rounded-lg flex items-center justify-center gap-2 border-green-700 hover:bg-green-50 transition-colors">
              <NextImage
                url="/header/login.svg"
                width={20}
                height={18}
                alt="login"
              />
              ورود / ثبت نام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}