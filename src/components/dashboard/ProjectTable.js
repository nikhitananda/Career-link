import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user4 from "../../assets/images/users/user4.jpg";

const tableData = [
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    competition: "TATA innovation challenge",
    status: "Participating",
    date_of_event: "28-11-2023",
  },
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    competition: "Hackowasp",
    status: "Participating",
    date_of_event: "27-10-2023",
  },
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    competition: "MLH hackathon",
    status: "Participating",
    date_of_event: "04-11-2023",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Competitions Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Event Name</th>

                <th>Status</th>
                <th>Date of event</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.competition}</td>
                  <td>{tdata.status}</td>
                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>{tdata.date_of_event}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
