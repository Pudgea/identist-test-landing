import { useState } from "react"
import { motion } from "framer-motion"
import HorizontalBorder from "../common/borders/horizontal.border"
import LazyImage from "../common/lazy-image/lazy-image"
import { animationSlideLeft, animationSlideRight } from "../../constants/animation.constants"
import { getImagePath } from "../../constants/infoConstants"
import { teamData } from "../../mocks/teamData"
import './index.scss'

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(0)

    const memberAnimation = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
        viewport: { once: true, amount: 0.3 }
    }

    return (
        <div className="team">
            <HorizontalBorder txt="команда" />
            <div className="team--container">
                <motion.div 
                    className="team--gallery"
                    {...animationSlideLeft}
                >
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            className={`gallery--item ${selectedMember === index ? 'active' : ''}`}
                            onClick={() => setSelectedMember(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <LazyImage 
                                src={getImagePath(member.photo)} 
                                alt={member.name}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="team--profile"
                    {...animationSlideRight}
                    key={selectedMember}
                >
                    <div className="profile--image">
                        <LazyImage 
                            src={getImagePath(teamData[selectedMember].photo)} 
                            alt={teamData[selectedMember].name}
                        />
                    </div>
                    <div className="profile--info">
                        <div className="info--left">
                            <motion.h3 
                                className="member--name"
                                {...memberAnimation}
                            >
                                {teamData[selectedMember].name}
                            </motion.h3>
                            <motion.p 
                                className="member--specialty"
                                {...memberAnimation}
                            >
                                {teamData[selectedMember].specialty}
                            </motion.p>
                        </div>
                        <div className="info--right">
                           {teamData[selectedMember].role && <motion.p 
                                className="member--role"
                                {...memberAnimation}
                            >
                                {teamData[selectedMember].role}
                            </motion.p>}
                            <motion.ul 
                                className="member--services"
                                {...memberAnimation}
                            >
                                {teamData[selectedMember].services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Team
