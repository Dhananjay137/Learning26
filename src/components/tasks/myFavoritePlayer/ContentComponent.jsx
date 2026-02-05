import React from 'react'
import '../../../assets/css/playerContent.css'
import imagePath from '../../../assets/ms_dhoni.jpeg'

export const ContentComponent = () => {
  return (
    <div className='content-container'>
      <img src={imagePath} alt='MS Dhoni' className='dhoni-image'></img>
      <div className='text-content-wrapper'>
        <h1>Early Life Background</h1>
        <ul>
          <li>Born on July 7, 1981, in Ranchi, Jharkhand.</li>
          <li>Initially excelled in football as a goalkeeper, which likely contributed to his sharp wicket-keeping reflexes.</li>
          <li>Worked as a ticket examiner with Indian Railways before his cricket career took off.</li>
          <li>Made his international debut for India in an ODI against Bangladesh in December 2004</li>
        </ul>
        <h1>Career Achievements</h1>
        <ul>
          <li>Known as "Captain Cool" for his calm and composed demeanor under pressure.</li>
          <li>Only captain in cricket history to win all three major ICC trophies: the 2007 ICC T20 World Cup, the 2011 ICC Cricket World Cup, and the 2013 ICC Champions Trophy.</li>
          <li>Led India to the number one rank in Test cricket for the first time in 2009</li>
          <li>Holds the record for the highest individual score by a wicketkeeper in ODIs (183 not out against Sri Lanka in 2005*)</li>
          <li>Captained the Chennai Super Kings (CSK) to five IPL titles (2010, 2011, 2018, 2021, 2023)</li>
          <li>Inducted into the ICC Cricket Hall of Fame in June 2025.</li>
        </ul>
        
        <h1>Playing Style and Legacy</h1>
        <ul>
          <li>A right-handed batsman and wicket-keeper known for his powerful hitting and the iconic "helicopter shot".</li>
          <li>Recognized as one of the best "finishers" in limited-overs cricket, often guiding India to victory in high-pressure situations.</li>
          <li>Holds the world record for the most stumpings effected in all three formats of international cricket (195 total).</li>
        </ul>
        <h1>Post-Retirement and Business Ventures</h1>
        <ul>
          <li>Retired from international cricket on August 15, 2020.</li>
          <li>Holds an honorary rank of Lieutenant Colonel in the Indian Territorial Army's Parachute Regiment.</li>
          <li>Invested in various businesses, including a sportswear brand (SEVEN), a production house (Dhoni Entertainment), a football club (Chennaiyin FC), and a plant-based protein company (Shaka Harry).</li>
          <li>Enjoys spending time with family and indulging in his passion for motorcycles and organic farming after retirement.</li>
        </ul>
      </div>
    </div>
  )
}
