const Footer = () => {
  return (
    <footer className=" text-black py-4 shadow-2xl border">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My E-Shop. All rights reserved.
        </p>
        <p className="text-sm mt-2">Made with ❤️ by Morshedy </p>
      </div>
    </footer>
  );
};

export default Footer;
