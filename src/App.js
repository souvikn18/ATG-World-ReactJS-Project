import './App.css'
import Logo from './Components/Images/whole.png'
import Hero from './Components/Pages/Hero';
import Navbar from './Components/Pages/Navbar';
import Navbar2 from './Components/Pages/Navbar2';
import PrimaryCard from './Components/Pages/PrimaryCard';
import CardImage1 from './Components/Images/Rectangle 5.png'
import CardOwnerImage1 from './Components/Images/Rectangle 3.png'
import CardImage2 from './Components/Images/Rectangle 5-2.png'
import CardOwnerImage2 from './Components/Images/Rectangle 3-2.png'
import Meetup from './Components/Pages/Meetup'
import CardImage3 from './Components/Images/Rectangle 5-3.png'
import CardOwnerImage3 from './Components/Images/Rectangle 3-3.png'
import Job from './Components/Pages/Job'
import CardOwnerImage4 from './Components/Images/Rectangle 3-4.png'
import Location from './Components/Pages/Location';

function App() {
  return (
    <>
      <Navbar Logo={Logo}/>
      <Hero/>
      <div className='sticky top-[0px] z-50 bg-white pb-1 pt-1'>
        <Navbar2/>
      </div>
      <div className='flex justify-center gap-[105px]'>
        <div className='flex flex-col gap-[16px] items-center  pb-[80px]'>
          <PrimaryCard CardImage={CardImage1} CardType={"✍️ Article"} CardTitle={"What if famous brands had regular fonts? Meet RegulaBrands!"} CardPara={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"} CardOwnerPhoto={CardOwnerImage1} CardOwnerName={"Sarthak Kamra"} CardViews={"1.4k views"}/>
          <PrimaryCard CardImage={CardImage2} CardType={"🔬️ Education"} CardTitle={"Tax Benefits for Investment under National Pension Scheme launched by Government"} CardPara={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"} CardOwnerPhoto={CardOwnerImage2} CardOwnerName={"Sarah West"} CardViews={"1.4k views"}/>
          <Meetup CardImage={CardImage3} CardType={"🗓️ Meetup"} CardTitle={"Finance & Investment Elite Social Mixer @Lujiazui"} CustomDate={"Fri, 12 Oct, 2018"} LocationName={"Ahmedabad, India"} CardOwnerPhoto={CardOwnerImage3} CardOwnerName={"Ronal Jones"} CardViews={"1.4k views"}/>
          <Job CardType={"💼️ Job"} CardTitle={"Software Developer"} Jobname={"Innovaccer Analytics Private Ltd."} LocationName={"Noida, India"} CardOwnerPhoto={CardOwnerImage4} CardOwnerName={"Joseph Gray"} CardViews={"1.4k views"}/>
        </div>
        <div>
          <Location/>
        </div>
      </div>
     
      
      
    </>
  );
}

export default App;
