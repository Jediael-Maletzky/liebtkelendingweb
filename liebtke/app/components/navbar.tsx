import Image from 'next/image';
import logo from '@/public/LOGO PNG.png';

export default function Navbar() {
  return (
    <nav className="flex items-center p-2 bg-white text-gray-800">
      <Image 
        src={logo} 
        alt="Liebtke Lending Logo"
        width={100}
        height={50}
      />
      <h2 className="ml-4">Liebtke Lending</h2>
    </nav>
  );
}
