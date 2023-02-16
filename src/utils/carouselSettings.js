const isZero = (number) => {
    if (number === 0 || number < 0) return true
    else return false
}


export const CarsouelSettings = (rows, slidesPerItem) => {
    let settings = {
        dots: false,
        infinite: false,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: slidesPerItem,
        rows: rows,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: slidesPerItem + 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: slidesPerItem + 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: slidesPerItem+1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: slidesPerItem,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: slidesPerItem,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: isZero(slidesPerItem - 1) ? 1 : slidesPerItem - 1,
                    slidesToScroll: 1,
                }
            },
            // {
            //     breakpoint: 992,
            //     settings: {
            //         slidesToShow: isZero(slidesPerItem - 2) ? 1 : slidesPerItem - 2,
            //         slidesToScroll: 1,
            //     }
            // },
            {
                breakpoint: 768,
                settings: {
                   
                    slidesToShow: isZero(slidesPerItem - 2) ? 2 : slidesPerItem - 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: isZero(slidesPerItem - 3) ? 2 : slidesPerItem - 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow:2,
                    slidesToScroll: 1,
                }
            },
            {
              breakpoint: 380,
              settings: {
                  slidesToShow:1,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 100,
              settings: {
                  slidesToShow:1,
                  slidesToScroll: 1,
              }
            }
            
        ]
    }

    return settings;
}