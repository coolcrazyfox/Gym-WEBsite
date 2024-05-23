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
        <div>
          <Swiper>
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
                  <div>
                    <p>{post.date}</p>
                    <Link href={post.link}>
                      <h5>{post.text}</h5>
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
