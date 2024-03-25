import axios from "axios";
import { useEffect, useState } from "react";

const HomeApi = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState(data);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecord(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Filter = (event) => {
    setRecord(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value)),
      data.filter((f) => f.email.toUpperCase().includes(event.target.value))
    );
  };

  return (
    <div className="p-10 bg-light">
      <div className="bg-white shadow border">
        <input
          type="text"
          className="form-control"
          onChange={Filter}
          placeholder="search"
        />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {record.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeApi;
