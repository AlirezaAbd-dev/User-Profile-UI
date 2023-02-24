import Avatar from "@/components/Avatar";
import Buttons from "@/components/Buttons";
import CardContainer from "@/components/CardContainer";
import TitleAndDescription from "@/components/Title&Description";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <CardContainer>
        {/* Avatar Container */}
        <Avatar />

        {/* Name And Bio Container */}
        <TitleAndDescription />

        {/* Buttons */}
        <Buttons />
      </CardContainer>
    </MainLayout>
  );
}
