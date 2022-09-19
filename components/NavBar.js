import React from "react";
import { Flex, Square, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar = ({ children }) => {
  const router = useRouter();

  const path = router.pathname;
  console.log(`path is ${path}`);
  const tabs = [
    { title: "Dashboard", uri: "/", menu: [] },
    { title: "Reports", uri: "/reports", menu: [] },
    { title: "Admin", uri: "/admin", menu: [] },
  ];

  let matchedTabindex = 0;

  //   TODO : Sort out Routing in URL
  if (path !== "") {
    let matchedTab = tabs.filter(
      (tab) => tab.uri.indexOf(path.toLowerCase()) != -1
    );
    if (matchedTab.length > 0) {
      matchedTabindex = tabs.indexOf(matchedTab[0]);
    }
  }
  console.log(`matchedTabindex is ${matchedTabindex}`);
  return (
    <>
      <Flex>
        <Spacer />
        {/* TODO : If dropdown menu is needed */}
        {/*  <Menu>
          <MenuButton>Actions</MenuButton>
          <MenuList>
            <MenuItem>Dashboard</MenuItem>
          </MenuList>
        </Menu> */}
        {tabs.map((tab, index) => (
          <Square m={3} role="button" key={index}>
            <Link
              href={tab.uri}
              fontWeight={matchedTabindex === index ? "bold" : ""}
            >
              {tab.title}
            </Link>
          </Square>
        ))}
      </Flex>
      {children}
    </>
  );
};

{
  /*  <Tabs align="end" variant="enclosed" defaultIndex={matchedTabindex}>
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Reports</Tab>
          <Tab>Admin</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <AdminTab />
          </TabPanel>
        </TabPanels>
      </Tabs> */
}
