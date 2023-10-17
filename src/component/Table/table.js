import React from "react";
import { Table } from "reactstrap";

const Tables = () => {
  return (
    <div>
      <Table
        striped
        hover
        cellPadding={5}
        cellSpacing={0}
        bordered
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr scope="row">
            <th align="center" style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
              Campagins
            </th>
            <th align="center" style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
              Click
            </th>
            <th align="center" style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
              Cost
            </th>
            <th align="center" style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
              Conversion
            </th>
            <th align="center" style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cosmatic</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Cosmatic</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Cosmatic</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Cosmatic</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Cosmatic</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Cosmatic</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>712</td>
            <td>USD 4,712</td>
            <td>8</td>
            <td>USD 16,568</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
