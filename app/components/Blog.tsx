"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
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
      Blog
    </section>
  );
};

export default Blog;
