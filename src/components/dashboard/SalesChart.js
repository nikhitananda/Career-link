import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user4 from "../../assets/images/users/user4.jpg";

const tableData = [
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    application: "JP Morgan",
    status: "pending",
  },
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    application: "Accenture",
    status: "done",
  },
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    application: "Linkedin",
    status: "done",
  },
  {
    avatar: user4,
    name: "Lakshya Gover",
    email: "lgover@gmail.com",
    application: "TATA",
    status: "pending",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Internship Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the filled internships
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Candidate name</th>
                <th>Application</th>
                <th>Status</th>
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
                  <td>{tdata.application}</td>
                  <td>{tdata.status}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
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
