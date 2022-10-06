export default function Buttons(props) {  
  return (
    <button className={"header_btn w-auto delay-100 transition ease-in-out " + (props.custom === "true" ? 'customBtn' : '')}>
        {props.children}
    </button>
  )
}
 