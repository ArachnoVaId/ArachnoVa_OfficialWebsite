export default function Hero() {
  return (
    <section className="w-full min-h-screen relative bg-transparent  flex flex-row justify-center items-center">
      <img
        alt=""
        src="/image/Hero/HeroBG.png"
        className="absolute w-full h-full -z-[1] max-lg:hidden "
        draggable="false"
      />
      <div className="text-black flex">
        <div className="flex flex-col justify-center">
          <div className="text-[1.6vw]">Arachnova </div>
          <div className="text-[2vw]">Your Web Design Partner</div>
          <div className="text-[2.8vw]">Always Dependable</div>
          <div className="text-[#4E5F66]">
            Crafting Digital Presence in Every Strand of Code
          </div>
          <div>
            <div className="w-[4vw] h-[4vh] bg-[#2EC1D9]"></div>
          </div>
        </div>
        <div>
          <div className="bg-transparent backdrop-blur-lg w-[28vw] h-[40vh] rounded-lg border-4 border-[#F1F5F9] ml-[4vw] ">
            <div className="px-[1vw] py-[4vh]">
              <p className="text-[#0151EC]">
                import <span className="text-[#8131B2]"> "./globals.css";</span>
              </p>
              <p className="text-[#1E293B]">
                <span className="text-[#0151EC]">import</span> &#123;{" "}
                <span className="text-[#1CA7BD]"> ArachnoVa</span> &#125; from{" "}
                <span className="text-[#8131B2]">"./api/provider</span>;
              </p>
              <p> &nbsp; </p>
              <p className="text-[#0151EC]">export default</p>
              <p className="text-[#1E293B]">
                &lt;div <span className="text-[#0151EC]">className</span>="
                <span className="text-[#8131B2]">Welcome to ArachnoVa</span>
                "&gt;
              </p>
              <p>
                &nbsp; &lt;div <span className="text-[#0151EC]">className</span>
                ="<span className="text-[#8131B2]">content</span>"&gt;
              </p>
              <p>&nbsp; &#123;</p>
              <p>
                &nbsp; &nbsp;{" "}
                <span className="text-[#8131B2]">
                  "Your web design partner"
                </span>
              </p>
              <p>&nbsp; &#125;</p>
              <p>&nbsp; &lt;/div&gt;</p>
              <p>
                &nbsp; &lt;<span className="text-[#0151EC]">img</span> src="
                <span className="text-[#8131B2]">img/herofix.png</span>"/&gt;
              </p>
              <p>&lt;/div&gt;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
