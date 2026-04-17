import { axiosGetEmployees } from "@/libs/apis/employee";
import { Button, Col, Flex, Row } from "antd";
import { IEmployeeCard } from "./Interfaces/employeeCard.interface";
import Link from "next/link";
import { Suspense } from "react";
import LoadingSpinner from "@/libs/components/global/Loading/LoadingSpinner";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";

export const revalidate = 3000;

const Employee = async () => {
  const fetchedEmployeeData = await axiosGetEmployees();

  return (
    <>
      <div className="w-full">
        <Flex align="center" justify="flex-end">
          <Link href="/employee/form">
            <Button size="large" className="mb-5" type="dashed">
              Tambah Employee
            </Button>
          </Link>
        </Flex>
        <Suspense fallback={<LoadingSpinner />}>
          <Row gutter={[10, 10]}>
            {fetchedEmployeeData &&
              fetchedEmployeeData.length > 0 &&
              fetchedEmployeeData.map((detail: IEmployeeCard) => (
                <Col md={8} key={detail._id}>
                  <EmployeeCard data={detail} />
                </Col>
              ))}
          </Row>
        </Suspense>
      </div>
    </>
  );
};

export default Employee;
