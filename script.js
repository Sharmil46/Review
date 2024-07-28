const reviews =[{
    id:1,
    name:'Sara Jones',
    job:'UI/UX',
    img:'https://www.course-api.com/images/people/person-1.jpeg',
    text:'Very straight forward and easy to use application!Efficient and fast money transfer.Good offers on vouchers.Loved the choice of how to spend the pot.Message wall'
},
{
    id:2,
    name:'Reeta',
    job:'Full Stack',
    img:'https://www.course-api.com/images/people/person-2.jpeg',
    text:'From the moment we entered, the welcoming atmosphere and attentive staff made us feel right at home. The menu offered a delightful array of dishes,  high-quality ingredients. '
},
{
    id:3,
    name:'mugil',
    job:'Web development',
    img:'https://www.course-api.com/images/people/person-3.jpeg',
    text:'Their menu is a culinary masterpiece, offering an incredible selection of dishes that cater to diverse tastes and preferences. The atmosphere is warm and inviting, and the staff is friendly .  '
},
{
    id:4,
    name:'John',
    job:'Digital Marketing',
    img:'https://www.course-api.com/images/people/person-4.jpeg',
    text:'The menu offered a delightful array of dishes, each expertly crafted with fresh, high-quality ingredients. Every bite was a culinary delight, and I can’t wait'
},
{
    id:5,
    name:'Jessie',
    job:'Data Science',
    img:'https://www.course-api.com/images/people/person-5.jpeg',
    text:'From the moment we entered, the welcoming atmosphere and attentive staff made us feel right at home. The menu offered a delightful array of dishes,  high-quality ingredients. '
}
]

const img=document.getElementById('person-img')
const author=document.getElementById('name')
const work=document.getElementById('work')
const about=document.getElementById('about')
const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')

currentItem=0
window.addEventListener('DOMContentLoaded',function(){
    let item=reviews[currentItem]
    img.src=item.img
    author.textContent=item.name
    about.textContent=item.text
    work.textContent=item.job
})
function screenShow(arg){
    let item=reviews[arg]
    img.src=item.img
    author.textContent=item.name
    about.textContent=item.text
    work.textContent=item.job

}
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1
    }
    screenShow(currentItem)
})
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0
    }
    screenShow(currentItem)
})