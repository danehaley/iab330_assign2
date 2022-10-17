import {
  BsXCircleFill,
  BsDashCircle,
  BsCheckCircle,
  BsTelephoneOutbound,
  BsCone,
} from "react-icons/bs";
import Table from 'react-bootstrap/Table';

export default function PatientList(state) {
  switch (state) {
    case "Available": {
      return (
        /*<>
          <BsCheckCircle color={"Green"} size={21} className="mx-0 my-auto" />
          <p className="ms-2 my-auto lh-1 fs-5">{{Name}}</p>
          <p className="ms-2 my-auto lh-1 fs-5">{{Floor}}</p>
          <p className="ms-2 my-auto lh-1 fs-5">{{Room}}</p>
        </>*/
        <>
          <Table>
            <thread>
              <tr>
                <th>Name</th>
                <th>Floor</th>
                <th>Room</th>
              </tr>
            </thread>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Floor 1</td>
                <td>Room 4A</td>
              </tr>
            </tbody>
          </Table>
        </>
      );
    }
  }
}
