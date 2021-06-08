
     const glider = document.querySelectorAll('.glider')

     console.log(glider.length);

     for (let i=0;i<glider.length;i++){
 
      window.addEventListener('load',function(){
        document.querySelectorAll('.glider')[i].addEventListener('glider-slide-visible', function(event){
            var glider = Glider(this);
            console.log('Slide Visible %s', event.detail.slide)
        });
        document.querySelectorAll('.glider')[i].addEventListener('glider-slide-hidden', function(event){
            console.log('Slide Hidden %s', event.detail.slide)
        });
        document.querySelectorAll('.glider')[i].addEventListener('glider-refresh', function(event){
            console.log('Refresh')
        });
        document.querySelectorAll('.glider')[i].addEventListener('glider-loaded', function(event){
            console.log('Loaded')
        });

        window._ = new Glider(document.querySelectorAll('.glider')[i], {
            slidesToShow: i===0?4:5, //'auto',
            slidesToScroll: 1,
            itemWidth: 150,
            draggable: true,
            scrollLock: false,
            dots: '#dots',
            rewind: true,
            arrows: {
                prev: i===0?"":'.glider-prev',
                next:i===0?"": '.glider-next'
            },
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 'auto',
                        itemWidth: i===0?370:i===1?300:250,
                        slidesToShow: 'auto',
                        exactWidth: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 4,
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 3,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 1,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
      });

     }
     
    


