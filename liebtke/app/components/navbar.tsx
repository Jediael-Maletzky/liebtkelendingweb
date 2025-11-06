export default function Navbar() {
  return (
    <nav className="bg-transparent" aria-label="Main Navigation">
      <div className= "flex display-inline wrap justify-between items-center p-2 bg-gray-800 text-white">
        <div>
            <img src="/LOGO PNG.png" alt="Liebtke Lending Logo" className="h-15 w-50"/>
        </div>

        <div>
          <ul>
          <li className="inline-block mx-4"><a href="#home" className="hover:">Home</a></li>
          <li className="inline-block mx-4"><a href="#about" className="hover:underline">How it works</a></li>
          <li className="inline-block mx-4"><a href="#services" className="hover:underline">Services</a></li>
          <li className="inline-block mx-4"><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        </div>

        <div>

          <button className="hover:transform text-white font-bold py-2 px-4 rounded">Log In </button>
        </div>
        
      </div>
    </nav>
  ); 
}