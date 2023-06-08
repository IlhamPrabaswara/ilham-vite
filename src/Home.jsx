import "./App.css";
import { Text } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <Layout>
        <Text fontSize="21px" fontWeight="bold">
          Hi, I&apos;m Ilham — Digital Designer focused on UI/UX Design and Branding.
        </Text>
      </Layout>
    </>
  );
}

export default Home;
