/*Testing for the navbar*/
const dropdownMenus = document.querySelectorAll(".hide-on-main-page");
function openNav() {
  var x = document.getElementById("navbar");
  var btn = document.getElementById("navbar-button");
  var dropdownMenus = document.getElementsByClassName("hide-on-main-page");
  if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
      btn.getElementsByClassName("fa-bars")[0].style.display = "block";
      btn.getElementsByClassName("fa-times")[0].style.display = "none";
      for (let i = 0; i < dropdownMenus.length; i++) {
          dropdownMenus[i].style.display = "none";
      }
  } else {
      x.classList.add("responsive");
      btn.getElementsByClassName("fa-bars")[0].style.display = "none";
      btn.getElementsByClassName("fa-times")[0].style.display = "block";
      for (let i = 0; i < dropdownMenus.length; i++) {
          dropdownMenus[i].style.display = "block";
      }
  }
}

/*Tabs*/
const tabs = document.querySelectorAll('.tabs li');
const tabContent = document.querySelectorAll('.tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => tab.classList.remove('is-active'));
tab.classList.add('is-active');
const target = tab.dataset.target;
tabContent.forEach(content => {
content.id === target
? content.classList.add('is-active')
: content.classList.remove('is-active');
});
});
});


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
   const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 25) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
  

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });
  

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });
  
  
})()



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-lazy");
      img.setAttribute("src", src);
      observer.unobserve(img);
    }
  });
});

const imgs = document.querySelectorAll("img[data-lazy]");
imgs.forEach((img) => {
  observer.observe(img);
});


const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

/*Discount popup*/
function closePopup() {
  var popupActive = document.querySelector('.popup-active');
  popupActive.parentNode.removeChild(popupActive);
}


/*Double pic slider - index page */
function beforeAfter() {
  document.getElementById('divider').style.width = document.getElementById('splitbar').value + "%";}
