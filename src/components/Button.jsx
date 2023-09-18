
function Button({ className, name, style }) {
  return (
    <div>
      <button className={className} style={style}>{name}</button>
    </div>
  )
}

export default Button;
