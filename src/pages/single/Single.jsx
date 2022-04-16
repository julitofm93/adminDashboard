import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Info</h1>
            <div className="item">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_1998.png" 
                alt="" 
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@adsada</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">34123123@12312</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">janedoe 555</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User transactions (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single