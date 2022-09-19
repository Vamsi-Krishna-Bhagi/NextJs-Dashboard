import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { reportsMetadata } from "../../config";
import { getReportsData } from "../../data";

const report = ({ reportMetadata, reportsData }) => {
  console.log(`reportsData length is ${reportsData.length}`);
//   reportsData.map((reportData, index) => {
//     Object.keys(reportData).map((key) =>
//       console.log(key + "\t" + reportData[key])
//     );
//   });
  return (
    <>
      <Heading>{reportMetadata.name}</Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              {reportMetadata.columns.map((field, index) => (
                <Th key={index}>{field}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {reportsData.map((reportData, index) => (
              <Tr key={index}>
                {Object.keys(reportData).map((key, index) => (
                  <Td key={index}>{reportData[key]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              {reportMetadata.columns.map((field, index) => (
                <Th key={index}>{field}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
export default report;

export const getServerSideProps = async (context) => {
  const reportMetadata = reportsMetadata.filter(
    (info) => info.uri === context.params.id
  )[0];
  //   console.log(reportMetadata);
  const reportsData = getReportsData();
  console.log(reportsData);
  return { props: { reportMetadata, reportsData } };
};

/* export const getStaticPaths = async () => {
  const uris = reportsInfo.map((reportInfo) => reportInfo.uri);
  const paths = uris.map((uri) => ({ params: { id: uri } }));
  return { paths, fallback: false };
}; */
