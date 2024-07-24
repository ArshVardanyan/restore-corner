function addClassOnScroll() {
    var element = document.querySelector('.animnav');

    window.addEventListener("scroll", function() {
      if (window.scrollY > 25) {
        element.classList.add("active2");
      } else {
        element.classList.remove("active2");
      }
    });
  }

  addClassOnScroll();

const animItems = document.querySelectorAll('.anim_items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

}
animOnScroll();


function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var element = document.querySelector('#scrollBtn');

    window.addEventListener("scroll", function() {
      if (window.scrollY > 100) {
        element.classList.add("active3");
      } else {
        element.classList.remove("active3");
      }
    });
}


function scrollToPosition(e) {
  window.scroll(0, e);
}


