import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Hero from "../components/Hero";

const Home: NextPage = ({
  ventData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Hero ventData={ventData} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://ventspace.vercel.app/api/vents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await res.json();

  return {
    props: {
      ventData: data,
    },
  };
};
