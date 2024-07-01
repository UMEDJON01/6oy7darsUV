function Footer() {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div className="container mx-auto text-center">
        <div className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/about" className="link link-hover">
            About
          </a>
          <a href="/contact" className="link link-hover">
            Privacy Policy
          </a>
        </div>
        <div className="mt-4">
          <p>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="https://facebook.com"
            className="btn btn-outline btn-primary m-1"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="btn btn-outline btn-primary m-1"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="btn btn-outline btn-primary m-1"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
