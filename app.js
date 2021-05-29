
      window.addEventListener('load',function(){
        document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
            var glider = Glider(this);
            console.log('Slide Visible %s', event.detail.slide)
        });
        document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
            console.log('Slide Hidden %s', event.detail.slide)
        });
        document.querySelector('.glider').addEventListener('glider-refresh', function(event){
            console.log('Refresh')
        });
        document.querySelector('.glider').addEventListener('glider-loaded', function(event){
            console.log('Loaded')
        });

        window._ = new Glider(document.querySelector('.glider'), {
            slidesToShow: 3, //'auto',
            slidesToScroll: 1,
            itemWidth: 150,
            draggable: true,
            scrollLock: false,
            dots: '#dots',
            rewind: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 'auto',
                        itemWidth: 300,
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




      window.addEventListener("load", function () {
        document
          .querySelector(".glider-2")
          .addEventListener("glider-slide-visible", function (event) {
            var glider = Glider(this);
            console.log("Slide Visible %s", event.detail.slide);
          });
        document
          .querySelector(".glider-2")
          .addEventListener("glider-slide-hidden", function (event) {
            console.log("Slide Hidden %s", event.detail.slide);
          });
        document
          .querySelector(".glider-2")
          .addEventListener("glider-refresh", function (event) {
            console.log("Refresh");
          });
        document
          .querySelector(".glider-2")
          .addEventListener("glider-loaded", function (event) {
            console.log("Loaded");
          });

        window._ = new Glider(document.querySelector(".glider-2"), {
          slidesToShow: 2, //'auto',
          slidesToScroll: 1,
          itemWidth: 150,
          draggable: true,
          scrollLock: false,
          dots: "#dots",
          rewind: true,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
          },
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToScroll: "auto",
                itemWidth: 300,
                slidesToShow: "auto",
                exactWidth: true,
              },
            },
            {
              breakpoint: 700,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 300,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                scrollLock: true,
              },
            },
          ],
        });
      });


      
      window.addEventListener("load", function () {
        document
          .querySelector(".glider-3")
          .addEventListener("glider-slide-visible", function (event) {
            var glider = Glider(this);
            console.log("Slide Visible %s", event.detail.slide);
          });
        document
          .querySelector(".glider-3")
          .addEventListener("glider-slide-hidden", function (event) {
            console.log("Slide Hidden %s", event.detail.slide);
          });
        document
          .querySelector(".glider-3")
          .addEventListener("glider-refresh", function (event) {
            console.log("Refresh");
          });
        document
          .querySelector(".glider-3")
          .addEventListener("glider-loaded", function (event) {
            console.log("Loaded");
          });

        window._ = new Glider(document.querySelector(".glider-3"), {
          slidesToShow: 2, //'auto',
          slidesToScroll: 1,
          itemWidth: 150,
          draggable: true,
          scrollLock: false,
          dots: "#dots",
          rewind: true,
          arrows: {
            prev: ".glider-prev-3",
            next: ".glider-next-3",
          },
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToScroll: "auto",
                itemWidth: 300,
                slidesToShow: "auto",
                exactWidth: true,
              },
            },
            {
              breakpoint: 700,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 300,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                scrollLock: true,
              },
            },
          ],
        });
      });


      window.addEventListener("load", function () {
        document
          .querySelector(".glider-4")
          .addEventListener("glider-slide-visible", function (event) {
            var glider = Glider(this);
            console.log("Slide Visible %s", event.detail.slide);
          });
        document
          .querySelector(".glider-4")
          .addEventListener("glider-slide-hidden", function (event) {
            console.log("Slide Hidden %s", event.detail.slide);
          });
        document
          .querySelector(".glider-4")
          .addEventListener("glider-refresh", function (event) {
            console.log("Refresh");
          });
        document
          .querySelector('.glider-4')
          .addEventListener("glider-loaded", function (event) {
            console.log("Loaded");
          });

        window._ = new Glider(document.querySelector('.glider-4'), {
          slidesToShow: 2, //'auto',
          slidesToScroll: 1,
          itemWidth: 150,
          draggable: true,
          scrollLock: false,
          dots: "#dots",
          rewind: true,
          arrows: {
            prev: ".glider-prev-3",
            next: ".glider-next-3",
          },
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToScroll: "auto",
                itemWidth: 300,
                slidesToShow: "auto",
                exactWidth: true,
              },
            },
            {
              breakpoint: 700,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 300,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                scrollLock: true,
              },
            },
          ],
        });
      });