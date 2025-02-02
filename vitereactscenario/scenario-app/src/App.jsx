import styles from './styles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Button from './components/Button';

const App = () => {
  return (
    <div className="flex flex-col bg-black w-full overflow-hidden">
      <div className="flex flex-col">

        <div className={`fixed top-0 left-0 w-full ${styles.flexCenter} z-50`}>
          <div className="w-full max-w-[1200px] px-4">
            <Navbar />
          </div>
        </div>

        <div className={`flex-1 flex-row pt-[190px] pl-46 pr-50 z-30 justify-center`}>
          <div className="flex flex-row justify-center">
            <div className={`flex flex-wrap justify-center gap-20 align-middle sm:pl-0 pr-0 `}>
              <Hero
                title="Convincing Your Girlfriend to Go to Cinema Alone"
                description="If you're deep into a game that has you trying to convince your girlfriend to go to a movie alone, you're not just playing for fun—you’re playing to master the art of persuasion! Want to know the secret? Every level you complete brings you closer to being a smooth-talking legend who can juggle gaming and relationships. Join now, and see how your skills can level up in real life, all while battling it out for the ultimate high score!"



              />

              <Hero
                title="Persuade your teacher for early dismissal"
                description="When you're in a bind and need to leave class early, it's not just about asking—it's about persuading! Think of it as a game where every word counts and every move is calculated. Whether it's for an important event, a family matter, or just to catch some fresh air, mastering the art of convincing your teacher is key. With the right approach, you'll learn how to present your case like a pro, while keeping respect and professionalism intact. Ready to level up your communication skills and get that early dismissal? The strategy starts here!"


              />

              <Hero
                title="Tell your mom you want to do the homework tomorrow"
                description="When you’re facing a pile of homework but your energy is running low, sometimes you just want to push it off until tomorrow. But how do you ask your mom without causing a scene? It’s all about the timing and approach! This is your chance to level up your persuasion game and find the perfect balance between responsibility and a little extra relaxation time. With a well-thought-out reason, a respectful tone, and a good plan to get it done tomorrow, you just might get that extra day to recharge. Ready to turn this challenge into a win? Let’s get those words right and earn that tomorrow!"

              />

              <Hero
                title="Convincing Your Girlfriend to Go to Cinema Alone"
                description="If you're deep into a game that has you trying to convince your girlfriend to go to a movie alone, you're not just playing for fun—you’re playing to master the art of persuasion! Want to know the secret? Every level you complete brings you closer to being a smooth-talking legend who can juggle gaming and relationships. Join now, and see how your skills can level up in real life, all while battling it out for the ultimate high score!"

              />

              <Hero
                title="Persuade your teacher for early dismissal"
                description="When you're in a bind and need to leave class early, it's not just about asking—it's about persuading! Think of it as a game where every word counts and every move is calculated. Whether it's for an important event, a family matter, or just to catch some fresh air, mastering the art of convincing your teacher is key. With the right approach, you'll learn how to present your case like a pro, while keeping respect and professionalism intact. Ready to level up your communication skills and get that early dismissal? The strategy starts here!"

              />

              <Hero
                title="Tell your mom you want to do the homework tomorrow"
                description="When you’re facing a pile of homework but your energy is running low, sometimes you just want to push it off until tomorrow. But how do you ask your mom without causing a scene? It’s all about the timing and approach! This is your chance to level up your persuasion game and find the perfect balance between responsibility and a little extra relaxation time. With a well-thought-out reason, a respectful tone, and a good plan to get it done tomorrow, you just might get that extra day to recharge. Ready to turn this challenge into a win? Let’s get those words right and earn that tomorrow!"

              />


            </div>

          </div>
        </div>

        <div className={`bg-primary h-10 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
