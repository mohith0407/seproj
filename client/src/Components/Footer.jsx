import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-12  bg-slate-100 dark:bg-gray-900 flex flex-col  justify-center items-center gap-4">
      <div className="w-full flex gap-5 items-center justify-center">
        <a
          href="https://www.instagram.com/mohith_raj0407?igsh=OTZqM2RoMjIweWU0"
          className="md:text-3xl text-xl text-sky-600 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        ><BsInstagram /></a>
        <a
          href="https://www.linkedin.com/in/mohith-hanumanthkar-0407raj/"
          className="md:text-3xl text-xl text-sky-600 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        ><BsLinkedin /></a>
        <a
          href="https://twitter.com/HMohithraj"
          className="md:text-3xl text-xl text-sky-600 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        ><BsTwitter /></a>
      </div>
    </footer>
  );
}
