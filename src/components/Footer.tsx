
const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
