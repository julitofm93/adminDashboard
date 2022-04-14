import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">12</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img className='avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_1998.png'/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar