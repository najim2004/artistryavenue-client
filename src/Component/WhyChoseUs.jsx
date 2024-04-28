import { GrSelect } from "react-icons/gr";
import {
  MdOutlineSupportAgent,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";

const WhyChoseUs = () => {
  return (
    <div className="flex px-3  max-w-[1300px] mx-auto flex-col items-center">
      <Fade>
        <h3 className="text-3xl lg:text-[48px] font-Akshar mt-12 lg:mt-[100px] text-center">
          Why Chose Us
        </h3>
      </Fade>
      <Zoom delay={200}>
        <p className="mt-6 mb-12 max-w-[650px] text-center">
          Choose us for your art & craft needs for a diverse selection,
          exceptional quality, user-friendly experience, and outstanding
          customer service. Elevate your creativity with us today!
        </p>
      </Zoom>
      <Fade delay={500}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-[30px] flex flex-col items-center rounded-2xl border-[5px] border-gray-100 justify-center text-center bg-[#fae8d3]">
            <GrSelect className="text-cRed size-[100px]" />
            <h3 className="text-3xl font-Akshar mb-2">Diverse Selection</h3>
            <p>
              Explore a wide range of paintings, from traditional to
              contemporary styles, ensuring there's something for every taste
              and preference
            </p>
          </div>

          <div className="p-[30px] flex flex-col items-center rounded-2xl border-[5px] border-gray-100 justify-center text-center bg-[#fae8d3]">
            <MdOutlineWorkspacePremium className="text-cRed size-[100px]" />
            <h3 className="text-3xl font-Akshar mb-2">Premium Quality</h3>
            <p>
              Our curated collection boasts high-quality paintings crafted by
              talented artists, guaranteeing excellence and lasting beauty in
              every piece.
            </p>
          </div>

          <div className="p-[30px] flex flex-col items-center rounded-2xl border-[5px] border-gray-100 justify-center text-center bg-[#fae8d3]">
            <MdOutlineSupportAgent className="text-cRed size-[100px]" />
            <h3 className="text-3xl font-Akshar mb-2">Personalized Service</h3>
            <p>
              Enjoy personalized assistance from our team of experts who are
              dedicated to helping you find the perfect painting to enhance your
              space.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default WhyChoseUs;
