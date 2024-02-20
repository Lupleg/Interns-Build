import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardCrousel = () => {
    const data= [
        {
            content:` "Rather than forwarding emails, we can look at each other’s cases and share information with the right people, instead of crowding everyone’s inbox." `,
            imageUrl:"https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fcustomers%2Foasis%2FOasis.png&w=96&q=75",
            name:"",
            position:""
        },
        {
            content:"It’s a layer of protection to make sure that you’ll never miss anything critical, whether it be a situation with your customer or answering a quote.",
            imageUrl:"",
            name:"Will Kerr",
            position:"CEO at Edge Logistics"
        },
        {
            content:"[ After switching from Zendesk ], we saw our improve by 40% in our member support team managing email, text, and chat channels.",
            imageUrl:"",
            name:"Joseph Emison",
            position:"CTO at Branch Insurance"
        },
        {
            content:` "If we ripped out Front tomorrow, we would lose our ability to collaborate behind the scenes. It would slow down our communication back to customers." `,
            imageUrl:"https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fcustomers%2Fculture-amp%2FCulture_Amp_logo.png&w=1920&q=75",
            name:"",
            position:""
        }
    ];

    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 6000,
        cssEase: "linear",
        pauseOnHover:true,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                pauseOnHover: true,
                
              }
            },
            {
                breakpoint:800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  pauseOnHover: true
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
                pauseOnHover: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: true,
              }
            }
          ]
      };
  return (
    <div className='mt-6 md:my-16'>
        <Slider {...settings}>
        {data.map((d,index)=>(
            <div className='w-4/5 mx-2' key={index}>
                <div className=' w-4/5  md:p-14 border-2 p-8 mx-8 shadow-xl rounded-xl z-50 md:py-8 '>
                <p className=' text-lg sm:text-xl md:text-xl lg:text-xl'>{d.content}</p>
                <p className='text-lg font-bold mt-8 '>{d.name}</p>
                <p className=''>{d.position} </p>
                <img src={d.imageUrl} alt="" width="120px"/>
            </div>
            </div>
            
        ))}
    </Slider>
    </div>
    
  )
}

export default CardCrousel