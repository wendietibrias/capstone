
interface IDetailParamProps {
    id: number;
}

export default async function EmployeeDetail({ params }:{ params: IDetailParamProps }){
    const { id } =  params;
    
}