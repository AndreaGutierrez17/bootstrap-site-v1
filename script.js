// Preloader
window.addEventListener("load",()=>{
  const preloader=document.getElementById("preloader");
  preloader.style.opacity="0";
  setTimeout(()=> preloader.style.display="none",500);
});

// Navbar scroll effect
document.addEventListener("scroll",()=>{
  const nav=document.querySelector(".navbar");
  if(window.scrollY>20){ nav.classList.add("scrolled"); } else{ nav.classList.remove("scrolled"); }
});

// Animate.css scroll reveal (strong)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const anim = el.getAttribute('data-anim') || 'animate__fadeInUp';
      el.classList.add('animate__animated', anim);
      io.unobserve(el);
    }
  });
},{ threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Bootstrap form validation
(()=>{
  'use strict'
  const forms=document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form=>{
    form.addEventListener('submit',event=>{
      if(!form.checkValidity()){ event.preventDefault(); event.stopPropagation(); }
      form.classList.add('was-validated')
    },false)
  })
})()
