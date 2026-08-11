//about
gsap.registerPlugin(ScrollTrigger);

// #about 섹션 메인 스크롤 타임라인
const aboutTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: ".about-pin-stage",
    anticipatePin: 1
  }
});

// Step 1: 'Peel Away' 사라지고 'Enjoy Fresh!' 등장
aboutTL.to(".text-group-1", {
  opacity: 0,
  scale: 0.9,
  duration: 0.4,
  ease: "power2.out"
}, 0);

aboutTL.fromTo(".text-group-2", 
  { opacity: 0, scale: 1.1 },
  { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
  0.15
);

// Step 2: 폭죽 입자 화면 비율 기반 좌표 반응형 계산
// 기본 PC 기준 좌표값에서 화면 너비에 맞춰 배율 계산 (최대 1, 모바일 0.4~0.5)
const getScaleFactor = () => Math.min(window.innerWidth / 1200, 1);

aboutTL.fromTo(".circle", 
  { 
    x: 0, 
    y: 0, 
    scale: 0.2, 
    opacity: 0 
  },
  {
    opacity: 1,
    scale: 1,
    // 화면 크기에 비례하여 폭죽 터지는 거리 자동 축소/확장
    x: (i) => [-320, 300, -420, 380, -220, 260, -350, 180][i] * getScaleFactor(),
    y: (i) => [-250, -200, 140, 220, -320, -300, -80, 280][i] * getScaleFactor(),
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.02
  },
  0.15
);

// 폭죽 입자 페이드아웃
aboutTL.to(".circle", {
  opacity: 0,
  scale: 1.3,
  duration: 0.3
}, 0.7);


//hamburger
const menuOpen = document.querySelector(".hamberger");
// 클래스명이 menu_open인 요소를 찾음. 처음 클릭할 대상 선택자 넣기(햄버거버튼 모양)
const menuClose = document.querySelector(".close");
// 클래스명이 menu_close인 요소를 찾음. 종료시에 클릭할 대상 선택자 넣기(X모양 버튼)
const gnb = document.querySelector(".gnb");
//active라는 클래스가 붙을 대상을 찾음. 없어졌다가 나타나야 할 대상 선택자 넣기

menuOpen.addEventListener("click", function () {
    gnb.classList.add("active");
});
//menuOpen을 클릭하면 #gnb에 active 클래스를 붙임

menuClose.addEventListener("click", function () {
    gnb.classList.remove("active");
});//menu_close를 클릭하면 #gnb에 active 클래스를 땜