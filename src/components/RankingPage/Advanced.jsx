import './Middle.css'

const Advanced = () => {
  return (
    <div>
        <div className="list">
          <div className="ranking first">
            <div className="number-userinfo-container">
            <div className="number" style={{ color: '#FFC702' }}>1</div>
              <div className="uesrinfo">
                <img src="../images/profile.png" alt="Profile Image" />
                <h4 className="uesrname">와플이</h4>
              </div>
            </div>
            <div className="typingspeed">
              <div className="highest">최고타수 501타</div>
            </div>
          </div>
          <div className="ranking second">
            <div className="number-userinfo-container">
              <div className="number">2</div>
              <div className="uesrinfo">
                <img src="../images//profile-2.png" alt="Profile Image" />
                <h4 className="uesrname">초보에유</h4>
              </div>
            </div>
            <div className="typingspeed">
              <div className="highest">최고타수 409타</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Advanced