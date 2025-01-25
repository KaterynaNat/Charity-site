import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <div className="logo text-lg font-bold">Логотип</div>
      <nav className="flex space-x-4">
        <a href="#about" className="hover:underline">Про нас</a>
        <a href="#services" className="hover:underline">Послуги</a>
        <a href="#team" className="hover:underline">Наша команда</a>
        <a href="#donors" className="hover:underline">Донори</a>
        <a href="#news" className="hover:underline">Новини</a>
        <a href="#media" className="hover:underline">Медіа</a>
        <a href="#footer" className="hover:underline">Контакти</a>
      </nav>
    </header>
  );
};

export default Header;