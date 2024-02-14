// function to change background colour of navigation when click an item
export const bgchange = (item) => {
    const Sids = ['pathitm-con', 'pathitm-act', 'pathitm-mng', 'S-home' ];//ids of short nav
    const Lids = ['Lpathitm-con', 'Lpathitm-act', 'Lpathitm-mng', 'LS-home'];//ids of long navigation
    const colors = ['#103F91', '#103F91', '#103F91', '#103F91', '#103F91'];

      colors[item - 1] = '#3C4F80'; // change the color based on the item
 const i=0
      for (let i = 0; i < 4; i++) {
        const Selement = document.getElementById(Sids[i]);
        const Lelement = document.getElementById(Lids[i]);

        
          Selement.style.backgroundColor = colors[i];
          Lelement.style.backgroundColor = colors[i];
        
      }
    
  };

export const bgchange_sub=() =>{
    const element = document.getElementById();

    element.style.backgroundColor = "#1750A2";

}
// function to toggle detailed and short navigation
export const navigationToggle = (type) =>{
    const ShortNav = document.getElementById('short-nav');
    const LongNav = document.getElementById('sidenav');
    if (type==true){// short navigation is displaying at the movement
        ShortNav.style.display='none';
        LongNav.style.display='block';
       
    }else{
        ShortNav.style.display='block';
        LongNav.style.display='none';
    }

}
export const userLogin = () =>{
    let datesetting = document.getElementById('fill-C-login-date');

    let date = new Date();
    datesetting.innerHTML =date;

}

export const showSubSections = (type)=>{
    const approved = document.getElementById('Lpathitm-approved');
    const pending = document.getElementById('Lpathitm-pending');
    if (type==true){
        approved.style.display='block';
        pending.style.display='block';
    }
    else{
        approved.style.display='none';
        pending.style.display='none';
    }

}