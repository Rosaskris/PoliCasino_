import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://www.facebook.com/Policasinoalritmodelalma" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faFacebookF}
        />
      </a>
      <a href="https://www.instagram.com/policasino/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faInstagram}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
