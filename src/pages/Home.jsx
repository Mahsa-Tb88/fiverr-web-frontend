import React, { useRef, useState } from "react";
import Slide from "../components/Slide";
export default function Home() {
  const sliderCart = useRef(null);
  const sliderProject = useRef(null);

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
  const settingCart = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
  };

  const projects = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Web and Mobile Design",
      username: "Anna Bell",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Logo Design",
      username: "Morton Green",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Animated GIFs",
      username: "Emmett Potter",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Packaging Design",
      username: "Freddie Johnston",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Social Media Design",
      username: "Audrey Richards",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Illustration",
      username: "Dalton Hudson",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Book Design",
      username: "Hannah Dougherty",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Digital Marketing",
      username: "Ward Brewer",
    },
  ];
  const settingProject = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };
  return (
    <div>
      {/*  poster */}
      <div className="bg-websiteColor headrt ">
        <div className="max-w-5xl m-auto flex justify-between items-center">
          <div className="text-white">
            <p className="text-4xl font-semibold ">
              Find the perfect <em>freelance</em> services
              <br /> for your business
            </p>
            <div className="flex justify-between items-center mt-8 border border-transparent overflow-hidden  rounded-md ">
              <div className="flex justify-between items-center w-full bg-white">
                {/* <IoSearchOutline className="text-slate-900 mx-2 font-semibold " /> */}
                <input className="py-2 w-full border-none outline-none text-slate-700 font-semibold text-lg h-11" />
              </div>
              <button className="px-3 bg-green-500 py-2 h-11 hover:bg-green-700">
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

      {/*  trust by */}
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

      {/*  slider carts */}
      <div className=" m-auto my-16 bg-green-300">
       {/*  <Slider ref={sliderCart} {...settingCart} className="max-w-4xl m-auto">
          {carts.map((c) => {
            return (
              <Slide key={c.id}>
                <div className="relative mx-3 cursor-pointer ">
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
        </Slider> */}
      </div>

      {/*  fingertips */}
      <div className=" bg-green-100 py-9">
        <div className="w-5/6 m-auto flex justify-between items-center gap-5">
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-6">
              A whole world of freelance talent at
              <br /> your fingertips
            </h3>
            <div className="mb-3">
              <div className="flex justify-start items-center">
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

      {/* tech */}
      <div className="bg-blue-950  my-20 py-8">
        <div className="w-5/6 m-auto flex justify-between items-center ">
          <div className=" w-2/5">
            <div className="flex justify-start items-end">
              <h2 className="text-white font-bold text-3xl">Fivver</h2>
              <i className=" text-white ml-3 text-3xl">Business</i>
            </div>
            <h4 className="text-white my-6 text-2xl font-semibold">
              A business solution for design <br />{" "}
              <i className="font-normal">teams</i>
            </h4>
            <h3 className="text-slate-300">
              Update to a curated experience packed with tools and benefite to
              dedicated business
            </h3>
            <div className="my-6">
              <div className="flex justify-start items-center mb-3">
                <h5 className="text-slate-100  text-lg">
                  Protected payments, every time
                </h5>
              </div>
              <div className="flex justify-start items-center mb-3">
                <h5 className="text-slate-100  text-lg">
                  Quality work done quickly
                </h5>
              </div>
              <div className="flex justify-start items-center mb-3">
                <h5 className="text-slate-100  text-lg">
                  The best for every budget
                </h5>
              </div>
              <button className="bg-emerald-600 px-2 py-1 rounded-md text-white my-2 hover:bg-emerald-800">
                Explore Feverr Business
              </button>
            </div>
          </div>
          <div className=" w-2/5 ">
            <div className="relative">
              <img src="././public/ax.png" />
              <div className="absolute bottom-4 right-24">
                <p className="text-xs bg-violet-200 w-36  p-1  rounded-md ">
                  Lorem ipsum dolor sit amet. Aut .
                </p>
              </div>
              <div className="absolute top-4 -left-24">
                <p className="text-xs bg-orange-200 w-36  p-1  rounded-md ">
                  Lorem ipsum dolor sit amet. Aut .
                </p>
              </div>
              <div className="absolute bottom-1/3 -left-32">
                <p className="text-xs bg-stone-200 w-36  p-1  rounded-md ">
                  Lorem ipsum dolor sit amet. Aut .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider products */}
      {/* <div className=" m-auto my-16 bg-green-300">
        <Slider
          ref={sliderProject}
          {...settingProject}
          className="max-w-4xl m-auto"
        >
          {projects.map((c) => {
            return (
              <Slide key={c.id}>
                <div className=" mx-3 cursor-pointer rounded-md  overflow-hidden ">
                  <img src={c.img} className=" h-44 " />
                  <div className=" flex justify-between items-center h-24  text-sm bg-white px-2 pt-2 font-semibold">
                    <div className="w-1/2 ">
                      <img src={c.pp} className="w-10 h-10 rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{c.cat}</p>
                      <p className="text-xs text-gray-500">{c.username}</p>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </div> */}
    </div>
  );
}
