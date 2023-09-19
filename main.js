
var nav_item = document.querySelectorAll('.item-link')

// TABS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var icon = this.querySelector("i.material-icons");

        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.innerHTML = "add";
        } else {
            panel.style.display = "block";
            icon.innerHTML = "remove";
        }
    });
}
document.getElementById("defaultOpen").click();

function openSport(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

function scrollId(element, e) {
    const el = document.getElementById(element)
    window.scrollTo(el.offsetLeft, el.offsetTop - 80)
}


$(function () {
    $('.item-link').click(function () {
        $('.item-link').find('a.active').removeClass('active');
        $(this).find('a').addClass('active');

        return false; //return false to aviod scroll top.
    });
});


window.onscroll = () => {
    var current = "";
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".item-link a");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }

    });
};
$('.item-link').click(() => {
    $('.link-items').removeClass('active')
    $('#nav-icon1').removeClass('open')
})

const burger = document.querySelector('.burger')

$('.burger').click(() => {
    $('.link-items').toggleClass('active')
})

const header = document.getElementById('header')
const isOpen = document.querySelector('#nav-icon1').classList.contains('open')
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'white'
        header.style.position = 'fixed'
        header.style.width = '100%'
    }
    else {
        header.style.background = 'transparent'
        header.style.position = 'static'
    }
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
})


$('.projects-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ],
    prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});


$('.feed-cards').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
            }
        },
    ],
    prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});