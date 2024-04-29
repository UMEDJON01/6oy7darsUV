import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl mb-8 font-bold text-red-600">
          <a
            href="https://www.instagram.com/umedjon_mamadaminov?igsh=MTIxbHlodmc2dWthMw=="
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            BY MAMADAMINOV UMEDJON
          </a>
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Find me on Instagram for more!
        </p>
        <p className="text-lg text-gray-700">
          Also available on{" "}
          <a
            href="https://t.me/Mamadaminov_U"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Contact;
