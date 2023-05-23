import ProfileImage from './componenets/Profile';
import thomas from './thomas.jpg';
import Experience from './componenets/Experience'
import styles from './Card1.module.css';
import CardList from './Card';
import thomas1 from './Assets/images.png'
import thomas2 from './Assets/download3.jpeg'
const altText = 'Profile Picture';
const  Home = (props) => 
{
   const { message , message2, message1 } = props;
   const keys = Object.keys(message);
      if (keys.length > 0) {
            const firstKey = keys[0];
            delete message[firstKey];
      }
    return (
        <div className={styles.entry}>
            <ProfileImage imageUrl={thomas} altText={altText} message2={message2} />
            <hr></hr>
           
            <h1 className={styles.h12}>Skills</h1>
            <div className={styles.skills} >
                <section className={styles.grid}>
                     {Object.keys(message).map((key) => (
                       
                        <div  key={key}>
                             <h1 className={styles.griditem} >■  {message[key]}</h1>
                       </div>
               ))}
                         
                      
                </section>
            </div>
            <hr></hr>
            <div>
              <CardList message1={message1}></CardList>
            </div>
            <hr></hr>
            <h1 className={styles.h12}>Work Experience</h1>
                        
            <div className={styles.main2}>
                <Experience imageUrl={thomas1}></Experience>
                <Experience imageUrl={thomas2}></Experience>
            
            </div>
           
        
         </div>
    );
    
      
}
export default Home;