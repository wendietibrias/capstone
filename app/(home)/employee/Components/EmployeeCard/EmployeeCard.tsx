import { Button, Card } from "antd"
import { IEmployeeCard } from "../../Interfaces/employeeCard.interface"

const EmployeeCard = (props: { data: IEmployeeCard }) => {
  return (
     <Card>
        <h3>{props.data.name}</h3>
        <p>{props.data.email}</p>
        <Button type="primary" className="mt-3">Detail Employee</Button>
     </Card>
  )
}

export default EmployeeCard