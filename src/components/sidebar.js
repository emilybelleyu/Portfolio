import Links from "../constants/link"
import { MdClose } from "react-icons/md"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <MdClose />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar