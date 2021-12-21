import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="z-10 flex justify-between px-20 pt-3 items-center fixed top-0 left-0 right-0 bg-white  ">
        <div>
          <img src="brand.svg" className="py-3 pr-3 cursor-pointer" />
        </div>
        <div className="flex text-lg gap-1">
          <div className="p-3 mx-1 cursor-pointer">
            <a href="">All</a>
          </div>
          <div className="p-3 mx-1mcursor-pointer">
            <a href="">Home</a>
          </div>
          <div className="p-3 mx-1 cursor-pointer">
            <a href="">Kitchen</a>
          </div>
          <div className="p-3 mx-1 cursor-pointer">
            <a href="">Work</a>
          </div>
          <div className="p-3 mx-1 cursor-pointer">
            <a href="">Travel</a>
          </div>
          <div className="p-3 mx-1 cursor-pointer">
            <a href="">Tech</a>
          </div>
          <div className="p-3 mx-1 text-[#DC2423] cursor-pointer">
            <a href="">Gift Guide</a>
          </div>
        </div>
        <div>
          <img src="search.svg" className="p-3 cursor-pointer" />
        </div>
      </div>
      <div className="mt-[180px] pb-[100px] px-20">
        <div className="flex justify-center text-[10vw] tracking-tight">
          <h1>Essentials curated.</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-[45px] px-[80px] py-5 h-max">
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product1.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Steamery
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575] ">Steamery</span>
            <span className="my-px text-xl">Cirrus No.3 Iron Steamer</span>
            <span className="text-xl">$180</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product2.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Bose</span>
            <span className="my-px text-xl">
              Noise Cancelling Headphones 700
            </span>
            <span className="text-xl">$379</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product3.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Jinen
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">
              Hasami Porcelain
            </span>
            <span className="my-px text-xl">Natural Mug</span>
            <span className="text-xl">$27</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product4.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Fellow</span>
            <span className="my-px text-xl">Stagg EKG Electric Kettle</span>
            <span className="text-xl">$159</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product5.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Quip
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Quip</span>
            <span className="my-px text-xl">Electric Tootbrush</span>
            <span className="text-xl">$40</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product6.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Away
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Away</span>
            <span className="my-px text-xl">The Front Backpack</span>
            <span className="text-xl">$195</span>
          </div>
        </div>
      </div>
      <div className="pt-[40px] flex justify-center">
        <button className="border border-black cursor-pointer rounded-[32px] hover:bg-black hover:text-white transition duration-3000">
          <p className="px-[24px] py-[14px] text-lg">See all Product</p>
        </button>
      </div>
      <div className="px-20">
        <div className="text-center ml-[150px] mr-[220px] mt-[200px] mb-[120px]">
          <span className="text-[48px] text-[#757575]">
            Few is a curation of essential products, handpicked for their
            exceptional performance and design.
          </span>
          <span className="text-[48px]">
            In a world of excess, we curate essentials because we believe having
            fewer but better things makes life better.
          </span>
        </div>
      </div>
      <div className="p-20">
        <div className="h-[102vh] rounded-[32px] bg-cover bg-center  flex items-center text-center justify-center bg-[url('/bg4.jpg')]">
          <div className="text-white pb-[100px]">
            <p className="text-xl text-[#ccc]">COMING SOON</p>
            <p className="text-[56px] mt-[-10px]">Curated by</p>
            <p className="text-[26px] pt-[15px] pb-[]26px">
              Creators and experts share products
            </p>
            <p className="text-[26px]">that enrich their lives.</p>
          </div>
        </div>
      </div>
      <div className="text-center my-[40px] ">
        <span className="text-[56px] ">Home</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[45px] px-[80px] py-5 h-max">
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product7.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Onsen</span>
            <span className="my-px text-xl">Bath Towel Set</span>
            <span className="text-xl">$75</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product8.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Birkenstock
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">
              Birkenstock
            </span>
            <span className="my-px text-xl">Zerman Shearling Slippers</span>
            <span className="text-xl">$100</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product9.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">
              Alaska Bear
            </span>
            <span className="my-px text-xl">Sleep Mask</span>
            <span className="text-xl">$10</span>
          </div>
        </div>
      </div>

      <div className="pt-[40px] flex justify-center">
        <button className="border border-black rounded-[32px] hover:bg-black hover:text-white transition duration-3000 cursor-pointer">
          <p className="px-[24px] py-[14px] text-lg">See all Home</p>
        </button>
      </div>
      <div className="text-center mt-[120px] mb-[40px]  ">
        <span className="text-[56px] ">Kitchen</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[45px] px-[80px] py-5 h-max">
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product10.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Global</span>
            <span className="my-px text-xl">
              G-2 Chefs Knife with Sharpener
            </span>
            <span className="text-xl">$150</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product11.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Lodge</span>
            <span className="my-px text-xl">
              12 Seasoned Crbon Steel Skillet
            </span>
            <span className="text-xl">$45</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product12.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Menu</span>
            <span className="my-px text-xl">Bootle Grinders</span>
            <span className="text-xl">$95</span>
          </div>
        </div>
      </div>

      <div className="pt-[40px] flex justify-center">
        <button className="border border-black rounded-[32px] hover:bg-black hover:text-white transition duration-3000 cursor-pointer">
          <p className="px-[24px] py-[14px] text-lg">See all Kitchen</p>
        </button>
      </div>
      <div className="text-center mt-[120px] mb-[40px] ">
        <span className="text-[56px] ">Work</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[45px] px-[80px] py-5 h-max">
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product13.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Midori</span>
            <span className="my-px text-xl">MD Notebook</span>
            <span className="text-xl">$13</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product14.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Fully
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Fully</span>
            <span className="my-px text-xl">Jarvis Bamboo Standing Desk</span>
            <span className="text-xl">$569</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product15.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">
              Rain Design
            </span>
            <span className="my-px text-xl">mStand Laptop Stand</span>
            <span className="text-xl">$40</span>
          </div>
        </div>
      </div>

      <div className="pt-[40px] flex justify-center">
        <button className="border border-black rounded-[32px] hover:bg-black hover:text-white transition duration-3000 cursor-pointer">
          <p className="px-[24px] py-[14px] text-lg">See all Work</p>
        </button>
      </div>
      <div className="text-center mt-[120px] mb-[40px] ">
        <span className="text-[56px] ">Travel</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[45px] px-[80px] py-5 h-max">
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product16.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Away
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Away</span>
            <span className="my-px text-xl">The Carry-On</span>
            <span className="text-xl">$255</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product17.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Kinto</span>
            <span className="my-px text-xl">Travel Tumbler 500ml</span>
            <span className="text-xl">$37</span>
          </div>
        </div>

        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product18.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Nexstand</span>
            <span className="my-px text-xl">Portable Laptop Stanad</span>
            <span className="text-xl">$30</span>
          </div>
        </div>
      </div>
      <div className="pt-[40px] flex justify-center">
        <button className="border border-black rounded-[32px] hover:bg-black hover:text-white transition duration-3000 cursor-pointer">
          <p className="px-[24px] py-[14px] text-lg">See all Travel</p>
        </button>
      </div>
      <div className="text-center mt-[120px] mb-[40px] ">
        <span className="text-[56px] ">Tech</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[45px] px-[80px] py-5 h-max">
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product19.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Belkin</span>
            <span className="my-px text-xl">Wireless Charger with MagSafe</span>
            <span className="text-xl">$90</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product20.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Sonos</span>
            <span className="my-px text-xl">One Smart Speaker</span>
            <span className="text-xl">$269</span>
          </div>
        </div>
        <div className="h-auto group">
          <div className="relative overflow-hidden">
            <img
              src="product21.png"
              className="group-hover:brightness-90 cursor-pointer rounded-[32px] transition duration-3250"
            />
            <button className="absolute bottom-[14px] right-[14px] text-gray-600 bg-white px-[16px] py-[7px] rounded-[32px] translate-y-[200px] group-hover:translate-y-0 transition flex justify-center items-center duration-[250]">
              Amazon
              <img src="arrow.svg" className="pl-[4px] pt-[6px]" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="mt-[18px] text-lg text-[#757575]">Amazon</span>
            <span className="my-px text-xl">2021 Kindle Paperwhite</span>
            <span className="text-xl">$140</span>
          </div>
        </div>
      </div>
      <div className="pt-[40px] flex justify-center">
        <button className="border border-black rounded-[32px] hover:bg-black hover:text-white transition duration-3000 cursor-pointer">
          <p className="px-[24px] py-[14px] text-lg">See all Tech</p>
        </button>
      </div>
      <div className="pt-[168px] pb-[150px] px-[80px] flex flex-col items-center outline-none">
        <span className="text-[48px] ">Join the newsletter</span>
        <span className="text-[26px] mt-[0.8em] mb-[1.4em]">
          Get curated essentials and updates to your inbox.
        </span>

        <div className="m-auto ">
          <div className="flex items-center h-14">
            <input
              className="pl-[28px] text-[20px] outline-none h-[55px] w-[400px] border border-gray-300 bg-transparent rounded-[32px] group-focus:outline-none group-focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
              type="email"
              placeholder="Your email"
            />
            <img
              src="arrowright.svg"
              className="absolute md:left-[850px] left-[905px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between align-center py-[40px] px-[80px]">
        <div className="text-lg ">
          <span className="py-[12x] mr-[24px] cursor-pointer">About</span>
          <span className="py-[12x] mr-[24px] cursor-pointer">Instagram</span>
          <span className="py-[12x] mr-[24px] cursor-pointer">Twitter</span>
          <span className="py-[12x] mr-[24px] cursor-pointer">Privacy</span>
          <span className="py-[12x] mr-[24px] cursor-pointer">Feedback</span>
        </div>
        <div>
          <span className="text-lg">© 2021 Few · All rights reserved</span>
        </div>
      </div>
    </div>
  );
}
