import "../../pages/reports/Denominators.css";
import { Button } from "react-bootstrap";

import { useEffect, useState } from "react";
import years from "../../data/Years";
import axios from "axios";

function DenominatorsForm() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8082/denopdf/states",
        {
          year: selectedYear,
          type: selectedType.toUpperCase(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
  };

  return (
    <>
      <form
        action=""
        method="post"
        className="form-denominators"
        autoFocus
        onSubmit={handleSubmit}
      >
        <div className="denominator-dropdown">
          <label>Select Year</label>
          <select
            name="All Years"
            id="year"
            required
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="0" key={0} className="option-denominators">
              --Select Year--
            </option>

            {years.map((data) => (
              <option
                value={data.year}
                key={data.id}
                className="option-denominators"
              >
                {data.year}
              </option>
            ))}
          </select>
        </div>

        <div className="denominator-dropdown">
          <label>Select Type</label>
          <select
            name="All Types"
            id="type"
            required
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="0" key={0} className="option-denominators">
              --Select Type--
            </option>

            <option value="1" key={1} className="option-denominators">
              Target Beneficiary
            </option>

            <option value="2" key={2} className="option-denominators">
              Drugs Requirement
            </option>
          </select>
        </div>

        <div className="form-group">
          <Button type="submit" id="fetch-data" variant="primary">
            Fetch
          </Button>
        </div>
      </form>
    </>
  );
}

export default DenominatorsForm;
