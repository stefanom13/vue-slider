const app = new Vue({
    el: '#app',
  
    data:{
  
      currentSlide: 0,
  
      slide: [
        {
          title: 'Svezia',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
          image: 'img/01.jpg',
        },
        {
          title: 'Svizzera',
          description: 'Lorem ipsum',
          image: 'img/02.jpg',
        },
        {
          title: 'Gran Bretagna',
          description:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          image: 'img/03.jpg',
        },
        {
          title: 'Germania',
          description:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
          image: 'img/04.jpg',
        },
        {
          title: 'Paradise',
          description:   'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
          image: 'img/05.jpg',
        },
      ]
    },
  
    methods:{
      buttPrev: function(){
        if (this.currentSlide !==0){
          this.currentSlide --
        } else {
          this.currentSlide = this.slide.length -1
        }
  
      },
      buttNext: function(){
        if (this.currentSlide !== this.slide.length -1){
          this.currentSlide ++
        } else {
          this.currentSlide = 0
        }
      },
      thumbClick: function(){
        this.currentSlide == index
      }
    }
  })
  
//   const slide = [
//     {
//         title: 'Svezia',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//         image: 'img/01.jpg'
//     },
//     {
//         title: 'Svizzera',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//         image: 'img/02.jpg',
//     },
//     {
//         title: 'Gran Bretagna',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//         image: 'img/03.jpg',
//     },
//     {
//         title: 'Germania',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//         image: 'img/04.jpg',
//     },
//     {
//         title: 'Paradise',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//         image: 'img/05.jpg',
//     },
// ]



// const slideWrapper = document.querySelector('.slide-wrapper')
// const controlImage = document.querySelector('.secondaryImages')
// const buttSucc = document.querySelector('.down')
// const buttPrec = document.querySelector('.up')

// let currentIndex = 0


// slide.forEach(({ title, description, image }) => {
//     const item = `
//         <div class="item">
//             <img src="${image}" alt="">
//             <div class="description">
//             <h5 class="titolo">${title}</h5>
//             <p class="paragrafo">${description}</p>
//             </div>
//         </div>
//         `
//     slideWrapper.innerHTML += item
// })

// const itemImage = [...document.getElementsByClassName('item')];
// itemImage[currentIndex].classList.add('active')
// slide.forEach(({ image }) => {

//   const boxImage = `
//   <div class="controls ">
//   <img class="image" src="${image}" alt="">
//   </div>  
//   `;
//   controlImage.innerHTML += boxImage;
// })

// const itemControl = [...document.getElementsByClassName('image')];
// itemControl[currentIndex].classList.add('active')



// // creare click down 
// buttPrec.addEventListener('click', function () {
//   itemImage[currentIndex].classList.remove('active')
//   itemControl[currentIndex].classList.remove('active')

//   if (currentIndex > 0) {
//       currentIndex--
//       itemImage[currentIndex].classList.add('active')
//       itemControl[currentIndex].classList.add('active')


//   } else {
//       currentIndex = slide.length - 1
//   }
//   itemImage[currentIndex].classList.add('active')
//   itemControl[currentIndex].classList.add('active')

// })

// // creare click up
// buttSucc.addEventListener('click', function () {
//   itemImage[currentIndex].classList.remove('active')
//   itemControl[currentIndex].classList.remove('active')


//   if (currentIndex < slide.length - 1) {
//       currentIndex++
//       itemImage[currentIndex].classList.add('active')
//       itemControl[currentIndex].classList.add('active')

//   } else {
//       currentIndex = 0
//   }
//   itemImage[currentIndex].classList.add('active')
//   itemControl[currentIndex].classList.add('active')

// })