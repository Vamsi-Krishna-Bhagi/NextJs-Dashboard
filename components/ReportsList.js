import {
  SimpleGrid,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import reportStyles from "../styles/reports.module.css";

const ReportsList = ({ reports }) => {
  return (
    <SimpleGrid spacing={10} minChildWidth="120px">
      {reports.map((reportInfo, index) => (
        <Link
          href="/reports/[id]"
          as={`/reports/${reportInfo.uri}`}
          key={index}
        >
          <a className={reportStyles.card}>
            <Center>
              <VStack>
                <Heading>{reportInfo.name}</Heading>
                <Text>{reportInfo.desc}</Text>
              </VStack>
            </Center>
          </a>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ReportsList;
