import { cookies, headers } from "next/headers";
import axios from "../interceptors/axios";

export async function axiosGetEmployees(){
    const cookieStore = cookies();
    const headerServer = headers();

    const requests = await axios.get('/employees', {});
    return requests.data;
}

export async function axiosPostEmployee(values: any){
    const requests = await axios.post(`/employees`, values);
    return requests.data;
}

export async function axiosGetEmployee(id: number){
    const requests = await axios.get(`/employees/${id}`);
    return requests.data;
}