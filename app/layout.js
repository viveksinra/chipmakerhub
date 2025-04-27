import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../public/assets/css/plugins/animate.min.css"
import "../public/assets/css/plugins/bootstrap.min.css"
import "../public/assets/css/plugins/jquery.fancybox.min.css"
import "../public/assets/css/plugins/owl.css"
import "../public/assets/css/plugins/rangeslider.css"
import "../public/assets/css/plugins/select.min.css"
import "../public/assets/css/plugins/slick.css"

import "../public/assets/css/global-settings.css"
import "../public/assets/css/theme.css"

import "../public/assets/css/plugins/flaticon_vankine.css"
import "../public/assets/css/plugins/font-awesome.min.css"
import "../public/assets/css/plugins/uicons-regular-rounded.css"
import "../public/assets/css/plugins/uicons-regular-straight.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChipMakersHub - Hire the World's Top VLSI Freelancer",
  description: "ChipMakersHub is a platform that connects companies with top-tier VLSI freelancers. We offer a wide range of services from RTL design to system integration, and we're dedicated to helping you achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
