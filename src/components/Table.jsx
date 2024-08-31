import { orderData } from "./data";
import { Tabletop } from "./TableTop";



export function Table(){
    return (

        <div className="bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4">
            <Tabletop/>
            <div class='overflow-x-auto'>
                <table class='w-full text-sm text-left rtl:text-right dark:text-gray-500'>
                    <thread class=' text-xm font-medium rounded uppercase text-black-400'>
                        <tr className="grid grid-cols-5">
                            <th scope="col" class='px-6 py-3 font-medium'>order ID</th>
                            <th scope="col" class='px-6 py-3 font-medium'>Status</th>
                            <th scope="col" class='px-6 py-3 font-medium'>Transaction ID</th>
                            <th scope="col" class='px-6 py-3 font-medium'>Refund date</th>
                            <th scope="col" class='px-6 py-3 text-right font-medium'>Order amount</th>
                        </tr>
                    </thread>

                    {orderData.map((order) =>{
                        return (
                            <tbody>
                                <tr class='bg-white border-b grid grid-cols-5'>
                                    <th scope="row" class='px-6 py-4 font-medium text-blue-700 whitespace-nowrap'> #{order.id}</th>
                                    <td class='px-6 py-3 flex items-center gap-2 text-black-600'> 
                                        { (order.status === "Successful") && <div className="h-2.5 w-2.5 rounded-full bg-green-500"/>}
                                        { (order.status === "Processing") && <div className="h-2.5 w-2.5 rounded-full bg-black-500"/>}
                                        { (order.status === "Failed") && <div className="h-2.5 w-2.5 rounded-full bg-red-500"/>}
                                        {order.status}
                                    </td>
                                    <td className="px-6 py-4  text-black-600">{order.transactionID}</td>
                                    <td className="px-6 py-4  text-black-600">{order.refundDate}</td>
                                    <td className="px-6 py-4 text-right text-black-600">{order.amount}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}