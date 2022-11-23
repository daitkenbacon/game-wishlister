interface HeaderProps {
    handleShowAllToggle: () => void;
    wishlist_length: number;
}


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return(
        <div className="wishlist-header">
        <h1>Wishlist Maker</h1>
        <div className="counter-container">
          <h4>Items: {props.wishlist_length}</h4>
          <label className="checkbox-container" onChange={props.handleShowAllToggle}>
            <input type="checkbox" defaultChecked />
            <span className="checkmark"></span>
            Show All
          </label>
        </div>
      </div>
    )
}

export default Header;