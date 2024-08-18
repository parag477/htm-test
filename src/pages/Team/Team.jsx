import './Team.scss';
import Navbar from '../../components/Navbar/Navbar';
import img from './team.png';
import Footer from '../../components/Footer/Footer';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <>
      <div className="team-container">
        <Navbar />
        <section className="team-section">
          <img
            src={img}
            alt="Team session background"
            className="team-background"
          />
          <div className="team-content">
            <h1 className="team-title">MEET OUR TEAM</h1>
            <p className="team-subtitle">CREATE | COLLABORATE | COMMUNICATE</p>
          </div>
        </section>
        <div className="gradient-overlay"></div>
      </div>
      <TeamCard />
      <Footer />
    </>
  )
}

export default Team;