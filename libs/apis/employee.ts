import { cookies, headers } from "next/headers";
import axios from "../interceptors/axios";

export async function axiosGetEmployees(){
    const cookieStore = cookies();
    const headerServer = headers();

    const requests = await axios.get('/employees', {});
    return requests.data;
}

export async function axiosPostEmployee(createPayloadDto: any){
    const requests = await axios.post(`/employees`, createPayloadDto);
    return requests.data;
}

export async function axiosGetEmployee(id: number){
    const requests = await axios.get(`/employees/${id}`);
    return requests.data;
}

export async function axiosUpdateEmployee(id: number, updatePayloadDto:any){
    const requests = await axios.patch(`/employees/${id}`, updatePayloadDto);
    return requests.data;
}