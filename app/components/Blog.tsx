"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const initBlogData = [
  {
    image: "/assets/img/blog/post1.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post2.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post3.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post4.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post1.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post2.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post3.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
  {
    image: "/assets/img/blog/post4.jpg",
    date: "February 11, 2024",
    text: "Maintain a perfect structure after workout",
    link: "",
  },
];

const Blog = () => {
  return (
    <section className=" bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-8">Blogs </h2>
        <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
          <Swiper
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {initBlogData.map((post, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      src={post.image}
                      alt={""}
                      width={320}
                      height={266}
                      className="mb-6"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="max-w-[380px] uppercase text-[12px] mb-1 tracking-[3px]">
                      {post.date}
                    </p>
                    <Link
                      href={post.link}
                      className="hover:text-accent transition-all duration-300"
                    >
                      <h5 className="h5">{post.text}</h5>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
