import { menuItems } from "./menuItems"

function Menu() {
  return (
    <div>
      {
        menuItems.map((ele,index) => (
            <p key={index}>{ele}</p>
        ))
      }
    </div>
  )
}

export default Menu
