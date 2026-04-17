import { cookies } from "next/headers";
import { axiosGetEmployee, axiosGetEmployees, axiosPostEmployee, axiosUpdateEmployee } from "../../../libs/apis/employee";
import { NextApiRequest, NextApiResponse } from "next";

export  async function GET(request: Request, response: NextApiResponse){
    const systemCookies = cookies();
    const getCookie =(await systemCookies).get('token');

    const employeesData = axiosGetEmployees();
    return  response.status(200).json({ data:employeesData });

}

export async  function POST(request: NextApiRequest,response: NextApiResponse){
  const { email,age,name } = request.body();
  const createEmployee = await axiosPostEmployee({ email,age,name });
  if(createEmployee){
    return response.status(200).json({ data: createEmployee, message:"Berhasil menambahkan data" })
  }
}

export async function DELETE(){}

export async function PATCH(request: NextApiRequest,response: NextApiResponse,{ params }: { params: Promise<{ id: string }> }){
    const paramValue = (await params).id;
    const body = request.body();
    const findEmployee = await axiosGetEmployee(Number(paramValue));
    if(!findEmployee){
        return response.status(404).json({ message:"Karyawan tidak ditemukan" })
    }
    const updateEmployeeData = await axiosUpdateEmployee(Number(paramValue), body);
    if(updateEmployeeData){
        return response.status(200).json({ message:"Berhasil mengedit data karyawan" });
    }
}