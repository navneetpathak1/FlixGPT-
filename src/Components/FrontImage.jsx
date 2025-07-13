import frontImage from "../assets/US-en-20250707-TRIFECTA-perspective_31a6495d-95e3-429e-926b-b2a3baeb86e2_medium.jpg";

const FrontImage = () => {
  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${frontImage})` }}
      ></div>

      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default FrontImage;
