import React, { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Slide from "../components/Slide";
import Slider from "react-slick";
import { CiCircleCheck } from "react-icons/ci";
export default function Home() {
  const sliderGig = useRef(null);
  // const [carts, setCarts] = useState([]);
  const carts = [
    {
      id: 1,
      title: "AI Artists",
      desc: "Add talent to AI",
      img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      title: "Logo Design",
      desc: "Build yor brand",
      img: "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      title: "WordPress",
      desc: "Customize your site",
      img: "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      title: "Voice Over",
      desc: "Share your message",
      img: "https://images.pexels.com/photos/7608079/pexels-photo-7608079.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 5,
      title: "Video Explainer",
      desc: "Engage your audience",
      img: "https://images.pexels.com/photos/13388047/pexels-photo-13388047.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 6,
      title: "Social Media",
      desc: "Reach more customers",
      img: "https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 7,
      title: "SEO",
      desc: "Unlock growth online",
      img: "https://images.pexels.com/photos/4820241/pexels-photo-4820241.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 8,
      title: "Illustration",
      desc: "Color you dreams",
      img: "https://images.pexels.com/photos/15032623/pexels-photo-15032623.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  const settingGig = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
  };
  return (
    <div>
      <div className="bg-websiteColor headrt ">
        <div className="max-w-5xl m-auto flex justify-between items-center">
          <div className="text-white">
            <p className="text-4xl font-semibold ">
              Find the perfect <em>freelance</em> services
              <br /> for your business
            </p>
            <div className="flex justify-between items-center mt-8 border border-transparent overflow-hidden  rounded-md ">
              <div className="flex justify-between items-center w-full bg-white">
                <IoSearchOutline className="text-slate-900 mx-2 font-semibold " />
                <input className="py-2 w-full border-none outline-none text-slate-700 font-semibold text-lg" />
              </div>
              <button className="px-3 bg-green-500 py-2 hover:bg-green-700">
                Search
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Popular:</p>
              <div>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Web Design
                </button>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Frontend
                </button>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Backend
                </button>
                <button className=" border-white text-white hover:bg-white hover:text-websiteColor px-3 py-1 rounded-2xl border mx-3">
                  Logo Design
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="././public/woman.png" />
          </div>
        </div>
      </div>
      <div className="bg-slate-100 flex justify-center items-center gap-6 py-6">
        <p className="text-gray-400 font-semibold">Trusted By: </p>
        <div className="flex justify-center items-center gap-4 ">
          <span className="text-gray-400">Goole</span>
          <span className="text-gray-400">Facebook</span>
          <span className="text-gray-400">Youtube</span>
          <span className="text-gray-400">Netflix</span>
          <span className="text-gray-400">PayPal</span>
        </div>
      </div>
      <div className=" m-auto my-16 bg-green-300">
        <Slider ref={sliderGig} {...settingGig} className="max-w-4xl m-auto">
          {carts.map((c) => {
            return (
              <Slide>
                <div key={c.id} className="relative mx-3 cursor-pointer ">
                  <div className="absolute top-0 w-full bg-black opacity-45 hover:opacity-70 h-full rounded-md"></div>

                  <img src={c.img} className=" rounded-md " />

                  <div className="absolute top-0 text-sm text-white pl-3 pt-2 font-semibold">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </div>
      <div className=" bg-green-100 py-9">
        <div className="w-5/6 m-auto flex justify-between items-center gap-5">
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-6">
              A whole world of freelance talent at
              <br /> your fingettips
            </h3>
            <div className="mb-3">
              <div className="flex justify-start items-center">
                <CiCircleCheck className="mr-2"/>
                <h5 className="text-slate-700 font-semibold text-lg">
                  The best for every budget
                </h5>
              </div>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet. Aut similique explicabo aut
                perferendis illo qui reiciendis explicabo ad mollitia quibusdam.
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-start items-center">
                <CiCircleCheck className="mr-2"/>
                <h5 className="text-slate-700 font-semibold text-lg">
                  Quality work done quickly
                </h5>
              </div>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet.s explicabo ad mollitia quibusdam.
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-start items-center">
                <CiCircleCheck className="mr-2"/>
                <h5 className="text-slate-700 font-semibold text-lg">
                  Protected payments, every time
                </h5>
              </div>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet. Aut similique explicabo aut
                perferendis illo qui reiciendis explicabo ad mollitia quibusdam.
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-start items-center">
                <CiCircleCheck className="mr-2"/>
                <h5 className="text-slate-700 font-semibold text-lg">
                  Protected payments, every time
                </h5>
              </div>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet. Aut similique explicabo aut
                perferendis illo qui ia quibusdam.
              </p>
            </div>
          </div>

          <div>
            <img src="././public/camp.jpg" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
