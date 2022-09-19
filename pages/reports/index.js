import React from "react";
import ReportsList from "../../components/ReportsList";
import { reportsInfo } from "../../config";

const report = ({ reportsInfo }) => {
  const reports = [
    {
      name: "Report 1",
      fields: [
        "Field 1",
        "Field 2",
        "Field 3",
        "Field 4",
        "Field 5",
        "Field 6",
        "Field 7",
        "Field 8",
      ],
    },
    {
      name: "Report 2",
      fields: [
        "Field 21",
        "Field 22",
        "Field 23",
        "Field 24",
        "Field 25",
        "Field 26",
        "Field 27",
        "Field 28",
      ],
    },
    {
      name: "Report 3",
      fields: [
        "Field 31",
        "Field 32",
        "Field 33",
        "Field 34",
        "Field 35",
        "Field 36",
        "Field 37",
        "Field 38",
      ],
    },
    {
      name: "Report 4",
      fields: [
        "Field 41",
        "Field 42",
        "Field 43",
        "Field 44",
        "Field 45",
        "Field 46",
        "Field 47",
        "Field 48",
      ],
    },
    {
      name: "Report 5",
      fields: [
        "Field 51",
        "Field 52",
        "Field 53",
        "Field 54",
        "Field 55",
        "Field 56",
        "Field 57",
        "Field 58",
      ],
    },
  ];
  return (
    <div>
      <ReportsList reports={reportsInfo} />
    </div>
  );
};
export default report;

export const getStaticProps = async () => {
  
  return { props: { reportsInfo } };
};
