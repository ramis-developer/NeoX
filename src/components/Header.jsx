import React, {useState} from 'react'
import { FaSearch, FaHeart, FaShoppingCart, FaThLarge } from 'react-icons/fa';
import './../styles/Header.css';

function Header({PopularProducts}) {
    const [mobileMenuOpen, setMobileMenuOpen] =useState(false);
    const [catalogOpen, setcatalogOpen] =useState(false);

    const [like, setLike] = useState(0);

    // const [search, setSearch] = useState("");

    // const findProduct = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <header className='header'>
        <div className='header-inner'>
            <div className='logo'>
            <span>KelKel</span>
            </div>
            <div className="search-bar">
            <input placeholder='Поиск товаров...' className="search-input"/> 
            <FaSearch className = 'search-icon'/>{like}
            </div>
            <nav className="menu desktop-menu">
                <div className="menu-link">
                    <FaThLarge className = 'icon'/>
                    <span>Каталог</span>
                </div>
                <div className="menu-link">
                    <FaHeart className = 'iconHeart'/>
                    <span>Избранное</span>
                </div>
                <div className="menu-link">
                    <FaShoppingCart className = 'icon'/>
                    <span>Корзина</span>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header