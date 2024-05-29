import React from 'react'
import './Home.css';
import logo22 from '../assets/Img/logo1.png';
import herobackground6 from '../assets/Img/hero/hero-background6.jpg';
import mitsubishi from '../assets/Img/parners/mitsubishi.png';
import spyker from '../assets/Img/parners/spyker.png';
import donker from '../assets/Img/parners/donker.png';
import Koenigsegg from '../assets/Img/parners/Koenigsegg.png';
import pagani from '../assets/Img/parners/pagani.png';
import zenvo from '../assets/Img/parners/zenvo.png';
import tj1 from '../assets/Img/cards/tj1.jpg';
import tj2 from '../assets/Img/cards/tj2.jpg';
import tj3 from '../assets/Img/cards/tj3.jpg';
import tj4 from '../assets/Img/cards/tj4.jpg';



const Home = () => {
    return (
        <div>
            <body className="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">

                <header id="header" className="header fixed flex item-center">
                    <div className="flex justify-between  py-5 px-8 items-center fixed z-10 w-full font-light top-0">
                        <div>
                            <a href="index.html" className="logo flex item-center me-auto me-xl-0">
                                <img src={logo22} alt="" />
                            </a>
                        </div>
                        <div>
                            <nav id="navmenu" className="navmenu">
                                <ul>
                                    <li><a href="index.html#hero" className="active"> Home </a></li>
                                    <li><a href="index.html#services" className="active"> Services </a></li>
                                    <li><a href="index.html#hero" className="active"> Shop </a></li>
                                    <li><a href="index.html#contact" className="active"> Contac Us </a></li>
                                    <li><a href="dashboard.html" className="active"> Test </a></li>
                                    <li><a href="cards.html" className="active"> Test2 </a></li>
                                </ul>
                                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                            </nav>
                        </div>
                        <a className="btn-getstarted" href="/Login">login</a>

                    </div>
                </header>

                <main id="main">
                    <section id="hero" className="hero">

                        <img src={herobackground6} alt="" data-aos="fade-in" />

                        <div className="relative z-20">
                            <div className="row">
                                <div className="col-lg-10">
                                    <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Hoze</h2>
                                    <p data-aos="fade-up" data-aos-delay="200">Cross borders, conquer roads</p>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section id="parners" className="parners">
                        <div className="relative z-20 mx-auto" data-aos="fade-up">
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                                <div className="col-span-1 parner-logo">
                                    <img src={mitsubishi} className="w-full" alt="" />
                                </div>
                                <div className="col-span-1 parner-logo">
                                    <img src={spyker} className="w-full" alt="" />
                                </div>
                                <div className="col-span-1 parner-logo">
                                    <img src={donker} className="w-full" alt="" />
                                </div>
                                <div className="col-span-1 parner-logo">
                                    <img src={Koenigsegg} className="w-full" alt="" />
                                </div>
                                <div className="col-span-1 parner-logo">
                                    <img src={pagani} className="w-full" alt="" />
                                </div>
                                <div className="col-span-1 parner-logo">
                                    <img src={zenvo} className="w-full" alt="" />
                                </div>
                            </div>
                        </div>

                    </section>

                    <div id="cards-content" className="cards-content">
                        <section id="info-card" className="info-card">
                            <img src={tj1} alt="" />

                            <div className="relative z-20">
                                <div className="" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold mb-8">Premium Automobiles</h3>
                                            <p className="text-gray-600">When you choose Hoze, you are choosing quality, reliability, and excellence in every detail. Our international vehicles are a statement of style, a status symbol, and a travel companion that will take you to discover new horizons. Experience the world from the comfort of your seat and discover the difference only Hoze can offer.</p>
                                            <a className="cta-btn inline-block mt-10 px-6 py-3 text-white rounded hover:bg-blue-600" href="#">Show more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section id="info-card" className="info-card">
                            <img src={tj2} alt="" />

                            <div className="relative z-20">
                                <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="col-span-10 xl:col-span-10">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold mb-8">Elegant Wheels</h3>
                                            <p className="text-gray-600">We bring the thrill of exploring the world behind the wheel right to your doorstep. We are the gateway to a world of international automotive possibilities, where quality, luxury, and innovation merge into dream vehicles that exceed your expectations.</p>
                                            <a className="cta-btn inline-block mt-10 px-6 py-3 text-white rounded hover:bg-blue-600" href="#">Show more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section id="info-card" className="info-card">
                            <img src={tj3} alt="" />

                            <div className="relative z-20">
                                <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="col-span-10 xl:col-span-10">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold mb-8">Exotic Vehicles</h3>
                                            <p className="text-gray-600">At Hoze, we don't just sell vehicles, we create experiences. Our passionate and knowledgeable team is dedicated to providing you with exceptional service from the moment you walk into our showroom to the day you drive your new vehicle. We work tirelessly to provide flexible, customized financing solutions that help you realize your dreams of driving a globally prestigious car.</p>
                                            <a className="cta-btn inline-block mt-10 px-6 py-3 text-white rounded hover:bg-blue-600" href="#">Show more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section id="info-card" className="info-card">
                            <img src={tj4} alt="" />

                            <div className="relative z-20 ">
                                <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="col-span-10 xl:col-span-10">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold mb-8">The Road Awaits You, conquer it with us</h3>
                                            <p className="text-gray-600">Your next journey starts with us. Ready to embark on this exciting automotive adventure? Visit us today and find your dream vehicle in Hoze!</p>
                                            <a className="cta-btn inline-block mt-10 px-6 py-3 text-white rounded hover:bg-blue-600" href="#">Register Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                    {/* <section id="services" className="services">

                        <div className="caontainer section-title" dato-aos="fade-up">
                            <h2>Services</h2>
                        </div>

                        <div className="relative z-20 w-3/4">
                            <div className="row gy-4">
                                <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
                                    <div className="service-item flex">
                                        <div className="icon flex-shrink-0"><i className="bi bi-wallet"></i></div>
                                        <div>
                                            <h4 className="title"><a href="services-details.html" className="stretched-link">Vehicle Quotation</a></h4>
                                            <p className="description">At Hoze, we understand that finding the perfect vehicle is the exciting first step towards road adventure. Our vehicle quote service is designed to help you discover the options that best suit your needs and budget. Our international car experts will give you detailed information on models, prices and features, making sure you make informed decisions and find the car of your dreams.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                    <div className="service-item flex">
                                        <div className="icon flex-shrink-0"><i className="bi bi-cash-coin"></i></div>
                                        <div>
                                            <h4 className="title"><a href="services-details.html" className="stretched-link">Sale of vehicles</a></h4>
                                            <p className="description">At Hoze, we don't just sell cars; We deliver unparalleled experiences. Our wide range of high-end, quality and luxury vehicles allows you to choose the perfect travel companion. With personalized service and flexible financing options, we make acquiring your desired vehicle a hassle-free process.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                    <div className="service-item flex">
                                        <div className="icon flex-shrink-0"><i className="bi bi-wrench-adjustable"></i></div>
                                        <div>
                                            <h4 className="title"><a href="services-details.html" className="stretched-link">Repair Workshop</a></h4>
                                            <p className="description">At Hoze, quality and service go hand in hand. Our specialized vehicle repair workshop is equipped with state-of-the-art technology and staffed by highly trained technicians who understand the importance of keeping your investment in perfect condition. From preventive maintenance to specialized repairs, our workshop strives to keep your international vehicles in top-notch condition and ensure flawless performance on every journey. Trust us to maintain your international vehicle at its best and maximize its lifespan.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                    <div className="service-item flex">
                                        <div className="icon flex-shrink-0"><i className="bi bi-person-hearts"></i></div>
                                        <div>
                                            <h4 className="title"><a href="services-details.html" className="stretched-link">After-Sales Service</a></h4>
                                            <p className="description">At Hoze, our relationship with you doesn't end with the sale. Our after-sales service is designed to provide you with peace of mind and ongoing assistance. From warranty service to scheduled maintenance, we are committed to taking care of your vehicle in the long run. Our expert team will handle any questions or issues you may have, ensuring your ownership experience is as exceptional as your buying experience. Your satisfaction and safety are our top priorities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section> */}

                    {/* <section id="contact" className="contact">
                        <div className="relative z-20 section-title" data-aos="fade-up">
                            <h2>Contact whit us</h2>
                        </div>

                        <div className="relative z-20" data-aos="fade-up" data-aos-delay="100">
                            <div className="row gy-4">
                                <div className="cold-lg-6">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <div className="info-item" data-aos="fade" data-aos-delay="200">
                                                <i className="bi bi-compass"></i>
                                                <h3>Address</h3>
                                                <p>Cll 108 Juanchitos | Cali, 7600 </p>
                                                <p>Kra 85 Arboledas | Bogota, 7601</p>
                                                <p>Av colibro row 31 | Pereira, 7602</p>
                                                <p>Kilometro 15 | Bogota, 7603</p>
                                                <p>Cll 59 Yanaos | Catagenera, 7603</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="info-item" data-aos="fade" data-aos-delay="300">
                                                <i className="bi bi-telephone"></i>
                                                <h3>Call Us</h3>
                                                <p>+57 36 598 5991 | Santiago de Cali</p>
                                                <p>+57 36 578 5992 | Bogota</p>
                                                <p>+57 36 578 5993 | Pereira</p>
                                                <p>+57 36 578 5994 | Medellin</p>
                                                <p>+57 36 578 5995 | Cartagena</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="info-item" data-aos="fade" data-aos-delay="400">
                                                <i className="bi bi-envelope"></i>
                                                <h3>Email Us</h3>
                                                <p>hozeCars&parts@gmail.com</p>
                                                <p>hozeRepairService@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="info-item" data-aos="fade" data-aos-delay="500">
                                                <i className="bi bi-clock"></i>
                                                <h3>Open Hours</h3>
                                                <p>Monday - Friday</p>
                                                <p>9:00AM - 05:00PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                </main>

                {/* <footer id="footer" className="footer">
    <div className="relative z-20 footer-top max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-full lg:col-span-5 footer-top">
                <a href="index.html" className="logo-flex items-center">
                    <img src={logo22} alt="" className="logo-flex items-center h-10" />
                </a>
                <p>Make Hoze your reliable partner in international vehicles. Discover a World of Luxury, Quality, and Performance on Every Trip. Experts in Quotation, Sale, Repair, and After-Sales Service of Vehicles of Global Prestige.</p>
            </div>

            <div className="col-span-full md:col-span-6 lg:col-span-2">
                <ul>
                    <h4 className="mb-2">Useful Links</h4>
                    <li><a href="index.html#hero">Home</a></li>
                    <li><a href="index.html#hero">Services</a></li>
                    <li><a href="index.html#hero">Shop</a></li>
                    <li><a href="index.html#hero">Login</a></li>
                </ul>
            </div>

            <div className="col-span-full md:col-span-6 lg:col-span-2">
                <h4 className="mb-2">Our Services</h4>
                <ul>
                    <li><a href="">Vehicle Quotation</a></li>
                    <li><a href="">Sale of vehicles</a></li>
                    <li><a href="">Repair workshop</a></li>
                    <li><a href="">After-Sales service</a></li>
                </ul>
            </div>

            <div className="col-span-full lg:col-span-3">
                <div className="text-center md:text-left">
                    <h4 className="mb-2">Contact Us</h4>
                    <p>Colombia</p>
                    <p>Monday-Frinday 9:00 - 5:00</p>
                    <p className="mt-4"><strong>Email:</strong> <span>hozeCars&parts@gmail.com</span></p>
                    <p><strong>Phone:</strong> <span>+57 36 598 5991</span></p>

                    <div className="social-links flex mt-4">
                        <a href="#"><Twitter /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Linkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer> */}

              

            </body>


        </div>
    )
}

export default Home
