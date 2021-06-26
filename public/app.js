const glider1 = document.getElementById("service");

new Glider(glider1,{
    slidesToShow: 3,
    slidesToScroll: 0,
    itemWidth: 500,
    draggable: true,
    scrollLock: false,
    dots: '#dots',
    rewind: true,
   
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToScroll: 0,
                itemWidth: 400,
                slidesToShow:'auto',
                exactWidth: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToScroll:5,
                slidesToShow:5,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                itemWidth: 300,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 1,
                dots: false,
                arrows: true,
                itemWidth: 400,
                scrollLock: false
            }
        }
    ]
});


