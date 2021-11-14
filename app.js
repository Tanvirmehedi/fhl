/*
    Project Name : Project FHL,
    Date : 04/11/2021,
    Creator : Tanvir Jishan,
    version : 1.0,
    GitHub Project Link : https://github.com/Tanvirmehedi/JavascriptProject,
    GitHub : https://github.com/Tanvirmehedi,
    Linkedin :  www.linkedin.com/in/tanvirjisn
*/
const title = document.title = 'Project FHL';

// nav 
const navIcon = document.querySelector('#nav__icon');
const navMenu =document.querySelector('.nav__menu');
showNav(navIcon,navMenu)

const dropDown = document.querySelector('.dropDown a');
const dropDownUl = document.querySelector('.dropDown__menu ul');
showNav(dropDown,dropDownUl);

// Function  for nav 
function showNav(ClickAbleBtn,toggleAble){
    ClickAbleBtn.addEventListener('click',function(){
        toggleAble.classList.toggle('show')
    })
}



// project Big Image

const zoomIcon = document.querySelectorAll('.project__icon');
const closeBtns = document.querySelectorAll('.fhl__project .container .project_box .project_img_box .close_icon');

zoomIcon.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        e.target.parentNode.classList.add('full_image');
        removeOverlayAndIcon()
    })
})

closeBtns.forEach((btn)=>{
    btn.addEventListener('click',(c)=>{
        console.log(c.target.parentNode.classList.remove('full_image'));
        addOverlayAndIcon()
    })
})



// Project Function

function removeOverlayAndIcon(){

        document.querySelector('body').style.overflow='hidden';

        const blur =document.querySelector('#blur');
        blur.classList.add('blur');

        const icons =document.querySelectorAll('.fhl__project .container .project_box .project_img_box .project__icon');
        icons.forEach((icon)=>{
            icon.style.display ="none"
        })

        const overlays = document.querySelectorAll('.fhl__project .container .project_box .project_img_box .overlay')
        overlays.forEach((overlay)=>{
        overlay.style.display="none";
        })

        const ProjectDetails = document.querySelectorAll('.project_details')
        ProjectDetails.forEach((details)=>{
        details.style.display="block";
        })
        closeBtns.forEach((closeBtn)=>{
        closeBtn.style.display='block';
        })
        
        }

// Back To normal
function addOverlayAndIcon(){
    document.querySelector('body').style.overflow='scroll';

    const blur =document.querySelector('#blur');
        blur.classList.remove('blur');

        const icons =document.querySelectorAll('.fhl__project .container .project_box .project_img_box .project__icon');
        icons.forEach((icon)=>{
            icon.style.display ="block"
        })

        const overlays = document.querySelectorAll('.fhl__project .container .project_box .project_img_box .overlay')
        overlays.forEach((overlay)=>{
        overlay.style.display="block";
        })

        const ProjectDetails = document.querySelectorAll('.project_details')
        ProjectDetails.forEach((details)=>{
        details.style.display="none";
        })

        closeBtns.forEach((closeBtn)=>{
            closeBtn.style.display='none';
        }) 
}


 const videoSpeed = document.querySelector('.brushier_bg_video');
 videoSpeed.playbackRate=0.6;

 const copyright = document.querySelector('.copyright span');

 let date = new Date();
 copyright.textContent=date.getFullYear();