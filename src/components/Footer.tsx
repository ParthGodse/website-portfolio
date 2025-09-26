const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 Parth Godse. All rights reserved.
            </p>
          </div>
          
          {/* <div className="text-center md:text-right">
            <p className="text-gray-300">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;