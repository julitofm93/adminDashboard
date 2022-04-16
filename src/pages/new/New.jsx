import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
            alt="" />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='john_doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Name and Surname</label>
                <input type="text" placeholder='john_doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john_doe@gmail.com'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='john_doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">password</label>
                <input type="password" placeholder='john_doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='john_doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='john_doe'/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New