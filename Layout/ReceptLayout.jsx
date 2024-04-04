import { Outlet } from "react-router-dom"

function ReceptLayout() {
  return (
    <div>
        <h2>Recepts</h2>
        <hr />
        <Outlet/>
    </div>
  )
}

export default ReceptLayout