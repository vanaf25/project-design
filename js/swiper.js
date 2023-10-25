let pageSlider=new Swiper('.page',{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction:'vertical',
    keyboard:{
        enabled:true,
        onlyInViewport:true,
        pageUpDown:true
    },
    mousewheel:{
        sensitivity:1,
        eventTarget:'.page'
    },
    /*  pagination:{
          el: '.page__pagination',
          clickable: true,
          type: 'bullets',
          bulletsClass: 'page__bullet',
          bulletActiveClass: 'page__bullet_active',
      },
      scrollBar:{
          el:'.page__scroll',
          draggable:true,
          dragClass:'page__drag-scroll',
      },*/
    parallax:true,
    speed:800,
    init:false,
    /*on:{
        init:function () {
            menuSlider();
        },
        slideChange:function () {
            menuSliderRemove();
            links[pageSlider.realIndex].classList.add('active')
        },*/
});
/*
let links=document.querySelectorAll('.links');
function menuSlider() {
    if (links.length>0){
        links[pageSlider.realIndex].classList.add('active')
        for (let i=0;i<links.length;i++){
            menuSliderRemove()
            const  link=links[i]
            link.addEventListener('click', function (event) {
                setTimeout(function () {
                    pageSlider.slideTo(i)
                },800)
                link.classList.add('active')
                event.preventDefault();
            })

        }
    }
}
function menuSliderRemove(params) {
    let linkActive=document.querySelector('.active');
    if (linkActive){
        linkActive.classList.remove('active')
    }
}
pageSlider.init();*/
