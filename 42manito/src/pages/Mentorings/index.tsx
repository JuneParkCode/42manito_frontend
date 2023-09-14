import Layout from "@/components/Layout/Layout";
import ReservationLists from "@/components/Reservation/ReservationLists";
import React, { useEffect, useState } from "react";
import TopBanner from "@/components/Banners/TopBanner";
import { UserReservationResDto } from "@/Types/UserReservation/UserReservationResDto";
import {
  useGetActiveReservationQuery,
  useGetRequestReservationsQuery,
} from "@/RTK/Apis/Reservation";
import { useSelector } from "react-redux";
import { RootState } from "@/RTK/store";
import { ReservationDefaultDto } from "@/Types/Reservations/ReservationDefault.dto";
import { ReservationRole } from "@/components/Reservation/getReservationStatus";
import ReservationModal from "@/components/Reservation/modal/ReservationModal";

const Mentoring = () => {
  const banner = [
    {
      head: "멘토링",
      title: "나의 멘토링",
      description: "멘토링 관리 페이지입니다",
      link: "/Guide",
      backgroundColor: "bg-signature_color-500",
      textColor: "text-white",
      image: "/guide.png",
      license:
        "https://kor.pngtree.com/freepng/meb-map-guide_4462396.html' 의 PNG 이미지 kor.pngtree.com",
    },
  ];
  const uid = useSelector((state: RootState) => state.rootReducers.global.uId);
  const [requestReservationPage, setRequestReservationPage] = useState(0);
  const [activeReservationPage, setActiveReservationPage] = useState(0);
  const [inactiveReservationPage, setInactiveReservationPage] = useState(0);
  const [role, setRole] = useState<ReservationRole | "all">("all");
  const isModalOpen = useSelector(
    (state: RootState) => state.rootReducers.reservation.isModalOpen,
  );
  const selectedReservation = useSelector(
    (state: RootState) => state.rootReducers.reservation.selectedReservation,
  );
  const { data: requestResponse }: UserReservationResDto =
    useGetRequestReservationsQuery({ id: uid });
  const { data: activeResponse }: UserReservationResDto =
    useGetActiveReservationQuery({
      id: uid,
      take: 10,
      page: activeReservationPage,
      as_mentor: role === ReservationRole.Mentor || role === "all",
      as_mentee: role === ReservationRole.Mentee || role === "all",
      active: true,
    });
  const { data: inactiveResponse }: UserReservationResDto =
    useGetActiveReservationQuery({
      id: uid,
      take: 10,
      page: inactiveReservationPage,
      as_mentor: role === ReservationRole.Mentor || role === "all",
      as_mentee: role === ReservationRole.Mentee || role === "all",
      active: false,
    });
  const [requestReservations, setRequestReservations] = useState<
    ReservationDefaultDto[]
  >([]);
  const [activeReservations, setActiveReservations] = useState<
    ReservationDefaultDto[]
  >([]);
  const [inactiveReservations, setInactiveReservations] = useState<
    ReservationDefaultDto[]
  >([]);

  useEffect(() => {
    if (requestResponse) {
      setRequestReservations([
        ...requestResponse.mentorReservations,
        ...requestResponse.menteeReservations,
      ]);
    }
  }, [requestResponse]);
  useEffect(() => {
    if (activeResponse) {
      setActiveReservations([
        ...(activeResponse?.mentorReservations || []),
        ...(activeResponse?.menteeReservations || []),
      ]);
    }
  }, [activeResponse]);
  useEffect(() => {
    if (inactiveResponse) {
      setInactiveReservations([
        ...(inactiveResponse?.mentorReservations || []),
        ...(inactiveResponse?.menteeReservations || []),
      ]);
    }
  }, [inactiveResponse]);

  const handleRoleSelect = (id: string) => {
    if (id === "mentor") {
      setRole(ReservationRole.Mentor);
    } else if (id === "mentee") {
      setRole(ReservationRole.Mentee);
    } else {
      setRole("all");
    }
  };

  return (
    <>
      <Layout>
        <div className="app-container">
          <TopBanner banner={banner} />
          <div className="mentoring-wrapper">
            <div className="mentoring-select-role">
              <div
                className={`mentoring-select-role-header ${
                  role === "all" ? "active-role" : "inactive-role"
                }`}
                id="all"
                onClick={(e) => {
                  handleRoleSelect(e.currentTarget.id);
                }}
              >
                전체
              </div>
              <div
                className={`mentoring-select-role-header ${
                  role === ReservationRole.Mentor
                    ? "active-role"
                    : "inactive-role"
                }`}
                id="mentor"
                onClick={(e) => {
                  handleRoleSelect(e.currentTarget.id);
                }}
              >
                멘토
              </div>
              <div
                className={`mentoring-select-role-header ${
                  role === ReservationRole.Mentee
                    ? "active-role"
                    : "inactive-role"
                }`}
                id="mentee"
                onClick={(e) => {
                  handleRoleSelect(e.currentTarget.id);
                }}
              >
                멘티
              </div>
            </div>
            <div className="mentoring-text-header">대기 중인 멘토링</div>
            <ReservationLists
              reservations={requestReservations}
              name={"request"}
              emptyMsg={"대기중인 멘토링이 없습니다 🥲"}
            />
            <div className="mentoring-text-header">진행 중인 멘토링</div>
            <ReservationLists
              reservations={activeReservations}
              name={"active"}
              emptyMsg={"진행중인 멘토링이 없습니다 🥲"}
            />
            <div className="mentoring-text-header">완료된 멘토링</div>
            <ReservationLists
              reservations={inactiveReservations}
              name={"inactive"}
              emptyMsg={"완료된 멘토링이 없습니다 🥲"}
            />
          </div>
        </div>
        {isModalOpen && selectedReservation !== null && <ReservationModal />}
      </Layout>
    </>
  );
};

export default Mentoring;
