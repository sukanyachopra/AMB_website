import { useState } from "react";

import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../pages/dashboard/Dashboard.css";

function DenominatorSheet({ name }) {
  const [excelSheet, setExcelSheet] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleExcelSheetUpload = (event) => {
    const file = event.target.files[0];
    setExcelSheet(file);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", excelSheet);

    const selectedYear = selectedDate.getFullYear();

    try {
      const response = await axios.post(
        `http://localhost:8082/numerator/upload?year=${selectedYear}`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h6 className="subHeading-dashboard">
          Upload Denominator Sheet for {name}
        </h6>
        <form onSubmit={handleUploadClick} className="form-dashboard">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleExcelSheetUpload}
            className="input-dashboard"
          />

          <div className="calendar-dashboard">
            <label> Select Year</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy"
              showYearPicker
            />
          </div>

          <button type="submit" className="button-upload-dashboard">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default DenominatorSheet;
