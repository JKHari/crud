import connection from "../config/index.js";

// create

export const createEmployee = (req, res) => {
  const datas = req.body;
  connection.query(`INSERT INTO Crud SET ?`, [datas], (err, result) => {
    if (err) {
      console.log(err);

      return res.send("Something create error ");
    }

    datas.id = result.insertId;

    const user  = {
      ...datas,
      id: result.insertId
    }

    return res.json({
      success: true,
      datas: user,
    });
  });
};

// read 

export const getEmployee = (req, res) => {
  connection.query(`SELECT * FROM Crud`, (err, result) => {
    if (err) {
      return res.send("Error");
    }

    return res.json({
      success: true,
      datas: result,
    });
  });
};

// update 

export const editEmployee = (req, res) => {
  const employee = req.body;

  connection.query(
    `UPDATE Crud SET ? WHERE id = ?`,
    [employee, employee.id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      return res.json({
        success: true,
        result,
      });
    }
  );
};

// delete 

export const deleteEmployee = (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM Crud WHERE id = ?`, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    return res.json({
      success: true,
      result,
    });
  });
};
