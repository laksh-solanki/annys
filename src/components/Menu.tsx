
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="bg-gray-700 p-4 text-white">
      <ul className="flex flex-col space-y-2">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
